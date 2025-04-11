import styles from "./home.module.css";

const HomePage = () => {
  return (
    <div className="homePage">
      <img
        className={styles.img}
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F1f%2Ff9%2F68%2F1ff9682f61e99f217bb67a61f02ecb56.jpg&f=1&nofb=1&ipt=d0d54d881d219635c8639d7681dff1b3c0a723cba10f1d109b6a1b630c7883d1"
        alt="sponge bob"
      />
    </div>
  );
};

export { HomePage };
