package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"strconv"

	"github.com/gorilla/mux"
)

type Car struct {
	ID    int    `json:"id"`
	Name  string `json:"name"`
	Price int    `json:"price"`
	Image string `json:"image"`
}

type Cars []Car

func GetAllCars(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Accept", "application/json")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Methods", "GET")

	cars := Cars{
		{1, "Nissan", 25000, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFY7Zzq7Dv5k1meqIOpQmVn3Ek4cXXgkvzYQ&usqp=CAU"},
		{2, "Toyota", 45000, "https://www.ixbt.com/img/n1/news/2022/0/4/toyota-camry-2021-gallery-01-full_tcm-3046-2203475_large.jpg"},
		{3, "Honda", 35000, "https://hips.hearstapps.com/hmg-prod/amv-prod-cad-assets/wp-content/uploads/2017/06/2017-Honda-Civic-Type-R-111-1.jpg?crop=0.586xw:0.479xh;0.158xw,0.418xh&resize=1200:*"},
	}

	json.NewEncoder(w).Encode(cars)
}

func GetById(w http.ResponseWriter, r *http.Request) { // Функция-обработчик запроса. Удаление записи
	w.Header().Set("Accept", "application/json")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Methods", "GET")

	params := mux.Vars(r)

	id, err := strconv.Atoi(params["id"])

	if err != nil {
		panic(err)
	}

	id--

	cars := Cars{
		{1, "Nissan", 25000, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFY7Zzq7Dv5k1meqIOpQmVn3Ek4cXXgkvzYQ&usqp=CAU"},
		{2, "Toyota", 45000, "https://www.ixbt.com/img/n1/news/2022/0/4/toyota-camry-2021-gallery-01-full_tcm-3046-2203475_large.jpg"},
		{3, "Honda", 35000, "https://hips.hearstapps.com/hmg-prod/amv-prod-cad-assets/wp-content/uploads/2017/06/2017-Honda-Civic-Type-R-111-1.jpg?crop=0.586xw:0.479xh;0.158xw,0.418xh&resize=1200:*"},
	}

	json.NewEncoder(w).Encode(cars[id])
}

func Router() *mux.Router {

	router := mux.NewRouter()
	router.HandleFunc("/cars", GetAllCars).Methods("GET", "OPTIONS")
	router.HandleFunc("/car/{id}", GetById).Methods("GET", "OPTIONS")
	return router
}

func main() {
	r := Router()
	fmt.Println("Starting the server on port 9000...")

	log.Fatal(http.ListenAndServe(":9000", r))
}
