import { SuperCategoryDTO } from "./SuperCategoryDTO"

export type CategoryDTO = {
        categoryId: number,
        categoryName: string,
        maxStonkDate: number | null,
        maxUseDate: number | null,
        status: string,
        rate: number,
        quantity: number | null,
        priceIn: number | null,
        dayIn: string,
        productionDate: string,
        notes: string,
        superCategory: SuperCategoryDTO,
        image: string,
        priceSold: number | null,
        totalInWarehouse: any,
        availableQuantity: any,
        expiredQuantity: any,
        shipmentQuanity: any,
        returnQuantity: any,
        stonkQuantity: any,
        imageFile: any
}

export enum CategoryStatus {
    Available = "Available",
}
   
  