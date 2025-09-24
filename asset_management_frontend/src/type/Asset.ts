export interface Card {
    id :string, 
    name :string,
    amount :number,
    note :string,
    order :number,
    updatedTime : string
}

export interface SubCategory {
    id: string;       
    title: string;    
    order: number;     
    cardList: Card[];    
    updatedTime: string;
}

export interface Category {
    id: string;            
    title: string;          
    order: number;          
    subCategoryList: SubCategory[];
    updatedTime: string;
}

export interface Board {
  id: string;             
  categoryList: Category[];
}