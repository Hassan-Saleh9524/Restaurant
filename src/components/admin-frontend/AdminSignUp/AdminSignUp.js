import React, { useState, useContext } from 'react';
import './AdminSignUp.css';
import { AdminContext } from '../AdminContext';
import FormInput from './FormInput';
import FormTextarea from './FormTextarea';
import MobileNumberInput from './MobileNumberInput';
import InputMapSelect from './InputMapSelect';
import FormDatalist from './FormDatalist';
import FixedShippingCostInput from './FixedShippingCostInput';
import SubmitButton from './SubmitButton';

export default function AdminSignUp() {
    const [restaurantContext, setRestaurantContext] = useContext(AdminContext);
    const changeRestaurantAddress = (event) => {
        setRestaurantContext({
            ...restaurantContext,
            restaurantAddress: event.target.value
        }
        )
    }
    const changeRestaurantName = (event) => {
        setRestaurantContext({
            ...restaurantContext,
            restaurantName: event.target.value
        }
        )
    }
    const changeActiveDates = (event) => {
        setRestaurantContext({
            ...restaurantContext,
            activeDates: event.target.value
        }
        )
    }
    const changeWorkingTime = (event) => {
        setRestaurantContext({
            ...restaurantContext,
            workingTime: event.target.value
        }
        )
    }
    const changeShippingCost = (event) => {
        setRestaurantContext({
            ...restaurantContext,
            shippingCost: event.target.value
        }
        )
    }
    const [display, setDisplay] = useState(false);
    const [formClassName, setFormClassName] = useState('');
    const activeDates = ['روزهای فرد', 'روزهای زوج', 'تمام روزها'];
    const workingTimes = [
        '10 صبح الی 23 شب',
        'شبانه روزی',
        '17 تا 24 شب'
    ];

    const toggleFormDisplay = () => {

        if (display) {
            setFormClassName('close');
            setDisplay(false);
        } else {
            setFormClassName('');
            setDisplay(true);
        }
    }


    return (
        <form className={`admin-signUp-form ${formClassName}`}>
            <FormInput labelValue="ایمیل"
                inputType="email"
                inputId="admin-email"
                placeholder=""
            />
            <FormInput labelValue="رمز عبور"
                inputType="password"
                inputId="admin-password"
                placeholder="حداقل 8 نویسه"
            />
            <FormInput labelValue="نام رستوران"
                inputType="text"
                inputId="restaurant-name"
                placeholder=""
                onInput={changeRestaurantName}

            />
            <FormTextarea labelValue="آدرس رستوران"
                inputId="restaurant-address"
                placeholder="مثلا تهران، روبروی دانشگاه شهید بهشتی"
                onInput={changeRestaurantAddress}
            />
            <MobileNumberInput labelValue="شماره تماس"
                inputType="tell"
                inputId="restaurant-callNumber"
                placeholder="مثلا  02133885544"
            />
            <InputMapSelect labelValue="منطقه رستوران"
                inputType="button"
                inputId="restaurant-area"
                inputValue="از روی نقشه انتخاب کنید"
            />
            <InputMapSelect labelValue="مناطق سرویس دهی"
                inputType="button"
                inputId="services-area"
                inputValue="از روی نقشه انتخاب کنید"
            />
            <FormDatalist labelValue="ساعات کاری"

                inputId="working-times"
                optionsValue={workingTimes}
                onInput={changeWorkingTime}
            />
            <FormDatalist labelValue="روزهای فعالیت"
                inputId="dates-of-activity"
                optionsValue={activeDates}
                onInput={changeActiveDates}
            />
            <FixedShippingCostInput labelValue="هزینه ثابت ارسال غذا (ریال)"
                inputId="fixed-shipping-cost"
                inputType="number"
                onInput={changeShippingCost}
            />
            <SubmitButton inputId="create-restaurant-btn"
                inputType="submit"
                onClick={toggleFormDisplay}
            />
        </form>
    )
}