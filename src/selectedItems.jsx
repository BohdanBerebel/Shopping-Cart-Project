import styled from "styled-components";

const Img = styled.img`
  max-width: 50%;
  max-height: 200px;
  width: auto;
  object-fit: contain;
  display: inline-block;
`;
const Svg = styled.svg`
  position: absolute;
  top: 0;
  right: 0;
  width: 50px;
  height: 50px;
`;

const P = styled.p`
  padding: 0;
  margin: 0;
`;

const SelectedItems = ({ items, setItems }) => {
  if (!items) return;
  const deleteItem = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  };
  return (
    <>
      {items.map((item) => {
        return (
          <div
            key={item.id}
            style={{
              position: "relative",
              display: "block",
              border: "2px violet dotted",
              margin: "0.5rem",
              padding: "0.5rem",
              gap: "1rem",
            }}
          >
            {/* <img src={item.image} alt="item" /> */}
            <Img src={item.image} alt="item" />
            <div>
              <P>{`Article: ${item.title}`}</P>
              <P>{`Quantity: ${item.quantity}`}</P>
            </div>
            <Svg
              onClick={() => {
                deleteItem(item.id);
              }}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-trash"
              viewBox="0 0 16 16"
            >
              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
              <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
            </Svg>
          </div>
        );
      })}
    </>
  );
};

export { SelectedItems };
