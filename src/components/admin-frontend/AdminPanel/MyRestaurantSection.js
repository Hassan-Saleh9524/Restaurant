export default function MyRestaurantSection(props) {


        return (
            <section className="my-restaurant">
                <h2>restaurant name</h2>
                <address>
                    restaurant address
                </address>
                <div>
                    mobile numbers
                </div>
                <div>
                    <h4>services location</h4>
                    <iframe title="my services location">map</iframe>
                </div>
                <div>
                    working time: <span>from 8am to  9pm</span>
                </div>
            </section>
       
    )
}