import { useEffect, useState } from "react";
import styles from "./goods.module.css";
import { useOutletContext } from "react-router-dom";

function ShowGoods() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { selectedItems, setSelectedItems } = useOutletContext();

  useEffect(() => {
    const loadData = (url) => {
      fetch(url)
        .then((resp) => {
          if (resp.status >= 400) {
            throw new Error("server error");
          }
          return resp.json();
        })
        .then((resp) => setData(resp))
        .catch((error) => setError(error))
        .finally(() => setLoading(false));
    };
    loadData("https://fakestoreapi.com/products");
  }, []);

  const addItem = (e) => {
    const input = e.target.previousSibling;
    if (input.value == "" || input.value == "0") {
      alert("Define how many you desire");
      return;
    }
    const object = data.find((item) => item.id === +input.id);
    const alreadyExist = selectedItems?.some((item) => item.id == object.id);
    if (alreadyExist) {
      alert("This item has been already added");
      return;
    }
    setSelectedItems([...selectedItems, { ...object, quantity: +input.value }]);
  };

  if (loading)
    return (
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  if (error) return <p>{error}</p>;
  return (
    <>
      <div className={styles.showcase}>
        {data.map(({ title, image, id }) => {
          return (
            <div key={id} className={styles.item}>
              <h2 className={styles.h2}>{title}</h2>
              <img className={styles.img} src={image} alt="item" />
              <div className="input-group mb-3">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Quantity"
                  aria-label="Quantity"
                  aria-describedby="button-addon2"
                  id={id}
                  defaultValue={"1"}
                />
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  id="button-addon2"
                  onClick={addItem}
                >
                  Add
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export { ShowGoods };
