import {StyleSheet, ScrollView, View} from 'react-native';
import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import ItemFilter from './parts/item-filter';
import ItemCard from '../../components/itemCard';
import http from "../../service/http";
import dayjs from "dayjs";
import {
  SEARCH_HOTEL,
  SEARCH_LOCATION,
} from "../../service/api-path";
import {
  ADD_FAVORITE_HOTEL,
  REMOVE_FAVORITE_HOTEL,
} from "../../store/slicers/hotels";
import useAuth from "../../libs/auth";

const TODAY = dayjs().format("YYYY-MM-DD");
const HOTEL = "HOTEL";

export default Home = ({ navigation }) => {
  const dispatch = useDispatch();
  const { isAuthenticated } = useAuth();

  const favoriteHotels = useSelector((state) => state.hotels.hotels.favorites);

  const [inputCity, setInputCity] = useState("Yogyakarta");
  const [Date, setDate] = useState(TODAY);
  const [Tanggal, setTanggal] = useState(TODAY);
  const [hotels, setHotels] = useState([]);

  const handleConfirmSearch = () => {
    searchCity();
  };

  const searchCity = async () => {
    try {
      const response = await http.get(SEARCH_LOCATION, {
        params: {
          search_type: HOTEL,
          name: inputCity,
        },
      });

      if (response.data[0].cityID) {
        searchHotelByCity(response.data[0].cityID);
      } else {
        searchCity();
      }
    } catch (e) {
      //
    }
  };

  const searchHotelByCity = async (cityId) => {
    try {
      const response = await http.get(SEARCH_HOTEL, {
        params: {
          date_checkin: Date,
          location_id: cityId,
          date_checkout: Tanggal,
          sort_order: "STAR",
        },
      });
      const hotelData = response.data.hotels.filter((hotel, idx) => {
        if (idx < 10) {
          return hotel.hotelId && hotel.thumbnailUrl && hotel.media.url;
        }
      });
      setHotels(hotelData);
    } catch (e) {
      // e
    }
  };

  const handleClickItemCard = (id, price) => {
    navigation.navigate("Detail", { hotelId: id, price: price });
  };

  const handleClickFavorite = (hotel, isFavorited) => {
    if (!isAuthenticated) {
      return navigation.navigate("Login");
    }
    isFavorited
      ? dispatch(REMOVE_FAVORITE_HOTEL(hotel))
      : dispatch(ADD_FAVORITE_HOTEL(hotel));
  };

  const isFavorited = (id) => {
    return favoriteHotels.some((hotel) => hotel.hotelId === id);
  };

  useEffect(() => {
    searchCity();
  }, []);

  // hotels.map((hotel) => (
  //   console.log("Hotel di", hotel.location.address.cityName.split(" ").pop())
  // ))

  return (
    <ScrollView style={styles.container}>
      <ItemFilter
        setInputCity={setInputCity}
        handleConfirmSearch={handleConfirmSearch}
        inputCity={inputCity}
      />
      <View style={{ marginBottom: 20 }}>
        {hotels &&
          hotels.map((hotel) => (
            <ItemCard
              key={hotel.hotelId}
              id={hotel.hotelId}
              hotel={hotel}
              name={hotel.name}
              rating={hotel.starRating}
              price={hotel.ratesSummary.minPrice}
              image={hotel.media.url}
              city={hotel.location.address.cityName.split(" ").pop()}
              isFavorited={isFavorited(hotel.hotelId)}
              handleClickItemCard={handleClickItemCard}
              handleClickFavorite={handleClickFavorite}
            />
          ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e8e8e8",
    padding: 20,
  },
});
