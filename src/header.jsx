import { Link } from "react-router-dom";
import { SelectedItems } from "./selectedItems";
import { Outlet } from "react-router-dom";
import { useState } from "react";

export function Header() {
  const [selectedItems, setSelectedItems] = useState([]);
  return (
    <>
      <header>
        <div>
          <h1>Welcome to my fantastic shop!</h1>
          <nav>
            <Link to="/">Home</Link>
            <Link to="goods">Goods</Link>
          </nav>
        </div>
        <button
          class="btn btn-primary"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight"
          aria-controls="offcanvasRight"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            shape-rendering="geometricPrecision"
            text-rendering="geometricPrecision"
            image-rendering="optimizeQuality"
            fill-rule="evenodd"
            clip-rule="evenodd"
            viewBox="0 0 512 467.685"
          >
            <path
              fill="#34B169"
              d="M159.632 0h87.127c9.117 0 16.576 7.459 16.576 16.576v68.882H143.056V16.576C143.056 7.459 150.515 0 159.632 0z"
            />
            <path
              fill="#4C80BF"
              d="M313.587 34.74c33.703 0 62.487 21.049 73.941 50.718H239.642c11.454-29.669 40.238-50.718 73.945-50.718z"
            />
            <path
              fill="#FFD448"
              d="M407.338 10.942c44.42 0 81.311 32.196 88.626 74.528l-.303-.012H318.712c7.319-42.323 44.211-74.516 88.626-74.516z"
            />
            <path
              fill="#FB5541"
              fill-rule="nonzero"
              d="M151.727 278.707l-47.29-171.245a16.321 16.321 0 01-.994-5.63c0-9.04 7.335-16.374 16.374-16.374h375.844c1.29.039 2.598.19 3.903.512 8.76 2.155 14.114 11.004 11.959 19.764l-42.37 171.42c-1.324 7.708-8.045 13.578-16.133 13.578H167.46v-.05c-7.16.004-13.734-4.741-15.733-11.975z"
            />
            <path
              fill="#333"
              d="M224.685 387.66c22.097 0 40.013 17.911 40.013 40.013 0 22.097-17.916 40.012-40.013 40.012-22.101 0-40.016-17.915-40.016-40.012 0-22.102 17.915-40.013 40.016-40.013zM400.109 387.66c22.101 0 40.012 17.911 40.012 40.013 0 22.097-17.911 40.012-40.012 40.012-22.098 0-40.013-17.915-40.013-40.012 0-22.102 17.915-40.013 40.013-40.013z"
            />
            <path
              fill="#B73E30"
              fill-rule="nonzero"
              d="M225.838 158.688c-.419-6.329 4.369-11.808 10.698-12.227 6.329-.419 11.807 4.368 12.227 10.698l4.115 61.158c.42 6.329-4.368 11.808-10.697 12.227-6.329.42-11.807-4.368-12.227-10.697l-4.116-61.159zM301.103 157.923c0-6.352 5.157-11.508 11.509-11.508 6.353 0 11.509 5.156 11.509 11.508v61.159c0 6.353-5.156 11.509-11.509 11.509-6.352 0-11.509-5.156-11.509-11.509v-61.159zM376.462 157.159c.419-6.33 5.898-11.117 12.227-10.698 6.329.419 11.116 5.898 10.697 12.227l-4.116 61.159c-.419 6.329-5.898 11.117-12.227 10.697-6.329-.419-11.116-5.898-10.697-12.227l4.116-61.158z"
            />
            <path
              fill="#484848"
              fill-rule="nonzero"
              d="M16.37 52.333C7.331 52.333 0 45.002 0 35.963c0-9.039 7.331-16.37 16.37-16.37h42.603l1.635.082c14.882.271 28.426 3.187 39.818 10.277 12.468 7.758 21.775 19.861 26.687 37.928 16.553 70.979 39.349 142.07 56.387 213.068 7.105 28.084 12.961 42.544 22.167 48.729 8.034 5.398 21.336 6.547 42.272 6.473 8.516-.027 16.817-.202 25.329-.202h175.209c9.04 0 16.37 7.331 16.37 16.37 0 9.039-7.33 16.371-16.37 16.371H272.499c-8.092 0-16.033.058-24.121.073-27.615.074-45.895-1.91-60.875-11.974-17.356-11.657-26.5-31.463-35.703-67.916L95.522 76.446c-2.543-9.362-6.83-15.299-12.359-18.739-5.929-3.689-13.827-5.242-22.963-5.42l-1.227.046H16.37z"
            />
            <path
              fill="#333"
              fill-rule="nonzero"
              d="M0 35.963c0-9.039 7.331-16.37 16.37-16.37h42.603l1.635.082c14.882.271 28.426 3.187 39.818 10.277 12.468 7.758 21.775 19.861 26.687 37.928 16.553 70.979 39.349 142.07 56.387 213.068 7.105 28.084 12.961 42.544 22.167 48.729 8.045 5.405 21.375 6.551 42.366 6.473 8.472-.027 16.735-.202 25.203-.202h175.241c9.04 0 16.37 7.331 16.37 16.37H260.248c-62.622 1.103-76.286-2.865-92.59-67.41l-56.34-212.745c-7.459-27.436-27.149-36.052-52.345-36.2H0z"
            />
          </svg>
        </button>
        <div
          class="offcanvas offcanvas-end"
          tabindex="-1"
          id="offcanvasRight"
          aria-labelledby="offcanvasRightLabel"
        >
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasRightLabel">
              Selected items
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body">
            {!selectedItems || selectedItems.length == 0 ? (
              "Empty yet"
            ) : (
              <SelectedItems
                items={selectedItems}
                setItems={setSelectedItems}
              />
            )}
          </div>
        </div>
      </header>
      <Outlet context={{ selectedItems, setSelectedItems }} />
    </>
  );
}
