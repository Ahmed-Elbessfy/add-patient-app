import { gql } from "@apollo/client";



export const ADD_PATIENT = gql`
mutation createPatient($key:Int!, $name:String!, $email:String!, $age:Int!, $gender:String!, $phone:String!, $country:String!, $description:String!, $gamer:String!, $preferredMeals:[String]!, $datePicker:String!, $rangePicker:[String]!, $available:Boolean!, $how_much:Int!, $rate:Int!){
    createPatient(key:$key, name:$name, email:$email, age:$age, gender:$gender, phone:$phone, country:$country, description:$description, gamer:$gamer, preferredMeals:$preferredMeals,datePicker:$datePicker,rangePicker:$rangePicker, available:$available, how_much:$how_much, rate:$rate){
    id,
    key,
    name,
    email,
    age,
    gender,
    phone,
    country,
    description,
    gamer,
    preferredMeals,
    datePicker, 
    rangePicker, 
    available,
    how_much, 
    rate
  }
}`