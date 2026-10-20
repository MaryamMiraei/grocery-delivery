interface IProduct {
  category: string;
  createdAt: string;
  description: string;
  discount: number;
  id: string;
  image: string;
  isOrganic: boolean;
  name: string;
  originalPrice: number;
  price: number;
  rating: number;
  reviewCount: number;
  stock: number;
  unit: string;
  updatedAt: string;
}

interface ICartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  stock: number;
}

interface IProductFilters {
  category?: string;
  maxPrice?: string;
  minPrice?:string;
  page?: string;
  limit?: string;
}