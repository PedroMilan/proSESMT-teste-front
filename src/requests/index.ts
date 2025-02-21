import axiosInstance from "@/services/api";
import {
  IDataCovidCountryResponse,
  IDataCovidDateResponse,
  IDataCovidStateResponse,
} from "@/types";

export const getDate = async (date: string): Promise<IDataCovidDateResponse> =>
  axiosInstance.get(`/brazil/${date}`);

export const getState = async (
  state: string
): Promise<IDataCovidStateResponse> => axiosInstance.get(`/brazil/uf/${state}`);

export const getCountry = async (
  country: string
): Promise<IDataCovidCountryResponse> => axiosInstance.get(`${country}`);
