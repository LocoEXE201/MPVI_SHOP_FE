import { useEffect, useState, useCallback } from 'react';
import categoryApi from '@/api/warehouse/categoryApi';
import useAppContext from '@/hooks/useAppContext';

interface ProductCardProps {
    categoryId: number;
    categoryName: string;
    image: string;
    priceIn: number;
    priceSold: number;
    rate: number;
    notes: string;
    superCategoryName: string;
    category: ProductCardProps;
  }

const useCategories = () => {
  const { isLoading, enableLoading, disableLoading } = useAppContext();
  const [category, setCategory] = useState<ProductCardProps[]>([]);
  const [error, setError] = useState<string | null>(null);

  const getAllCategory = useCallback(async () => {
       try {
      enableLoading();
      const response = await categoryApi.getAllCategory();
      if (response.status === 200) {
        disableLoading();
        setCategory(response.data.result);
      } else {
        console.log("Failed to fetch data. Status code:", response.status);
        return [];
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      return [];
    }
  }, [enableLoading, disableLoading]);


  return {getAllCategory, category, isLoading, error };
};

export default useCategories;