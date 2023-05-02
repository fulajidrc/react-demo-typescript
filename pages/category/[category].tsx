import Product from "@/components/shared/Product";
import { getCategoryProducts } from "@/store/category/category.action";
import { RootState } from "@/store/reducers/types";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";

export default function CategoryDetail() {
    const router = useRouter();
    const {category} = router.query
    const { categoryProducts } = useSelector((state: RootState) => state.category)
    const dispatch:Dispatch<any> = useDispatch()

    useEffect(() => {
        if(typeof category == 'string')
            dispatch(getCategoryProducts(category))
    }, [category])
    
    return(
        <>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 pb-4'>
                    {categoryProducts.map((product) => (
                        <Product product={product}></Product>
                    ))}
            </div>
        </>
    )
}