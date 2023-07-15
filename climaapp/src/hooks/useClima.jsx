import { useContext } from "react";
import ClimaContext from "../context/ClimaPovider";

export const useClima=()=>{
    return useContext(ClimaContext)
}