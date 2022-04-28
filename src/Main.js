import restaurant from "./restaurant.jpg";

function Main(props) {
    return (
        <section>
              <p>We serve the most {props.adjective} food around.</p>

              <img src={restaurant} height={200} alt="Image of a napkin on plates with a fork and knife on the right." />
              
              <ul className="left-align">
                  {props.dishes.map((dish) => (
                    <li key={dish.id}>{dish.title}</li>
                    )
                  )}
              </ul>
        </section>
    )
};
  
export default Main;