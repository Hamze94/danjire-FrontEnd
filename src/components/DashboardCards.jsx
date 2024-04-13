import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSalesPerMonth } from '../redux/features/salesSlice';

const DashboardCard = () => {
    const totalProfit = 45000;
    const profitPercentage = 4.35;
    const dispatch = useDispatch();
    const { salesPerMonth, loading, error } = useSelector(state => state.sales); // Access state.salesPerMonth directly
    console.log(salesPerMonth)
    useEffect(() => {
        dispatch(fetchSalesPerMonth());
    }, [dispatch]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-2 ">
            <div className="bg-white overflow-hidden shadow sm:rounded-lg">
                <div className="px-4 py-5 sm:px-6">
                    <div className="flex items-center">
                        <div className="flex-shrink-0 bg-blue-500 rounded-md p-3">
                            {/* Icon or image */}
                            <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
                            </svg>
                        </div>
                        <div className="ml-5 w-0 flex-1">
                            <h3 className="text-lg font-semibold leading-6 text-gray-900">Total Profit</h3>
                            <p className="mt-1 text-lg font-semibold text-gray-900 sm:mt-0 sm:col-span-2">${salesPerMonth}</p>
                            <p className="mt-1 text-sm text-gray-500">({profitPercentage}%)</p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default DashboardCard;
