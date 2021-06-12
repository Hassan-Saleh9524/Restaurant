import ShowAddress from './ShowAddress';
import ShowMobileNumbers from './ShowMobileNumbers';
export default function MyRestaurantSection(props) {
    const {restaurantName,
        restaurantAddress,
        mobileNumbers,
        workingTime,
        activeDates,
        shippingCost} = {...props};

        return (
            <section className="my-restaurant">
                <h2 className="restaurant-name">{restaurantName || 'رستوران سارای' }</h2>
                <ShowAddress address={restaurantAddress || "شهریار دانشگاه آزاد"} />
                <ShowMobileNumbers numbers={mobileNumbers} />
                <div className="our-location-service">
                    <span>مناطق سرویس دهی ما:</span> 
                    <iframe title="my services location">map</iframe>
                </div>
                <div className="restaurant-detail-item">
                ساعات کاری: 
                <span className="details-span">
                   {workingTime || "8 صبح الی 23 شب"}
                </span>
                </div>
                <div className="restaurant-detail-item">
                روزهای فعالیت:
                <span className="details-span">
                    {activeDates || "همه روز ها"}
                </span> 
                </div>
                <div className="restaurant-detail-item">
                هزینه ثابت ارسال غذا:
                <span className="details-span">
                    {shippingCost || "15 هزار تومان"}
                </span>
                </div>
            </section>
       
    )
}