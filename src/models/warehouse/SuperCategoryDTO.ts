export type SuperCategoryDTO = {
    superCategoryId: number,
    superCategoryName: string,
    descriptions: string,
    lastUpdateOn: string,
    updateBy: any,
    status: string,
    image: string,
    totalCategory: number
}

export enum SuperCategoryStatus {
    Available = "Available",
}
   
  