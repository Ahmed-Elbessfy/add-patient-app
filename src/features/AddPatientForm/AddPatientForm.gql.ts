import { gql } from "@apollo/client";



export const ADD_PATIENT = gql`
mutation createPatient($key:Int!, $name:String!, $email:String!, $age:Int!, $gender:String!, $phone:String!, $country:String!){
    createPatient(key:$key, name:$name, email:$email, age:$age, gender:$gender, phone:$phone, country:$country){
    id,
    key,
    name,
    email,
    age,
    gender,
    phone,
    country
  }
}`