import React, { useEffect, useState } from "react";
import InlineSelectField from "../components/InlineSelectField";
import * as APIService from "../services/api";
import SalesChart from "../components/SalesChart";
import Navbar from "../components/Navbar";

import "./DashboardPage.css";

function DashboardPage ({}) {
    const [selectedCategory, setSelectedCategory] = useState(APIService.categories[0].id);
    const [selectedProduct, setSelectedProduct] = useState();
    const [_, setSelectedBrand] = useState();
    const [selectedSales, setSelectedSales] = useState([]); 

    // Filtered Data

    const filteredProducts = APIService.products.filter(function (item) {
        return item.categoryId === selectedCategory;
    });

    const filteredBrands = APIService.brands.filter(function (item) {
        return item.productId === selectedProduct;
    });

    // Action Functions

    const onSelectCategory = function (id) {
        setSelectedCategory(parseInt(id));
    };

    const onSelectProduct = function (id) {
        setSelectedProduct(parseInt(id));
    };

    const onSelectBrand = function (id) {
        setSelectedBrand(parseInt(id));

        const stats = APIService.brandSales.find(function(item) {
            return item.brandId === parseInt(id);
        }) || [];

        setSelectedSales(stats.sales);
    };

    // Effects

    useEffect(function () {
        if (selectedCategory) {
            setSelectedProduct(filteredProducts[0].id);
        }
    }, [selectedCategory]);

    useEffect(function () {
        if (selectedProduct) {
            onSelectBrand(filteredBrands[0].id);
        }
    }, [selectedProduct]);

    return (
        <div className="dashboard-page">
            <Navbar />
            <div className="dashboard-page__filter-header">
                <div className="dashboard-page__filter-header__item">
                    <InlineSelectField
                        onChange={({ target }) => onSelectCategory(target.value)}
                        label="Category"
                        data={APIService.categories}
                    />
                </div>
                <div className="dashboard-page__filter-header__item">
                    <InlineSelectField 
                        onChange={({ target }) => onSelectProduct(target.value)}
                        label="Product" 
                        data={filteredProducts}
                    />
                </div>
                <div className="dashboard-page__filter-header__item">
                    <InlineSelectField 
                        onChange={({ target }) => onSelectBrand(target.value)}
                        label="Brand" 
                        data={filteredBrands}
                    />
                </div>
            </div>
            <div className="dashboard-page__sales-chart">
                <SalesChart
                    categories={["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]}
                    data={selectedSales}
                />
            </div>
        </div>
    )
}

export default DashboardPage;