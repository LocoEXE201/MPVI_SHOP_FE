import React, { useEffect, useState, useCallback } from 'react';
import useAppContext from '@/hooks/useAppContext';
import { SuperCategoryDTO } from '@/models/warehouse/SuperCategoryDTO';
import superCategoryApi from '@/api/warehouse/superCategoryApi';

const useSuperCategory = () => {
    const { isLoading, enableLoading, disableLoading } = useAppContext();
    const [superCategory, setSuperCategory] = useState<SuperCategoryDTO[]>([]);
    const [error, setError] = useState<string | null>(null);

    const getAllSuperCategory = useCallback(async () => {
           try {
      enableLoading();
      const response = await superCategoryApi.getAllSuperCategory();
      if (response.status === 200) {
        disableLoading();
        setSuperCategory(response.data.result);
      } else {
        console.log("Failed to fetch data. Status code:", response.status);
        return [];
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      return [];
    }
    }, [enableLoading, disableLoading]);


    return {getAllSuperCategory, superCategory, isLoading, error };
};

export default useSuperCategory;