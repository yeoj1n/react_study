import React, { useEffect, useState, useRef, useCallback } from "react";
import "./test.css";
import LazyLoad from "react-lazyload";

const fakeFetch = (delay = 1000) =>
  new Promise((res) => setTimeout(res, delay));

/* 리스트 아이템 */
const ListItem = ({ item }) => {
  return (
    <LazyLoad throttle={200} height={300}>
      <div className="ListItem">
        <span>hello1</span>
        {/* <img src={item.imgPath} /> */}
      </div>
    </LazyLoad>
  );
};

function InfiniteAndLazy() {
  /* 아이템 개수와 현재 로딩 상태 */
  const [state, setState] = useState({ items: [], isLoading: true });
  const [target, setTarget] = useState(null);

  /* fake 비동기 아이템 로드 */
  const fetchItems = async () => {
    await fakeFetch();
    console.log("fetchItems");
    setState((prev) => ({
      items: [
        ...prev.items,
        {
          imgPath: "https://source.unsplash.com/featured/?cat?t=1",
        },
        {
          imgPath: "https://source.unsplash.com/featured/?cat?t=2",
        },
        {
          imgPath: "https://source.unsplash.com/featured/?cat?t=3",
        },
        {
          imgPath: "https://source.unsplash.com/featured/?cat?t=4",
        },
        {
          imgPath: "https://source.unsplash.com/featured/?cat?t=5",
        },
      ],
      isLoading: false,
    }));
  };
  /* 초기 아이템 로딩 */
  useEffect(() => {
    fetchItems();
  }, []);

  /* 인터섹션 callback */
  const onIntersect = async ([entry], observer) => {
    if (entry.isIntersecting) {
      observer.unobserve(entry.target);
      await fetchItems();
      observer.observe(entry.target);
    }
  };
  /* 옵저버 등록 */
  useEffect(() => {
    let observer;
    if (target) {
      observer = new IntersectionObserver(onIntersect, { threshold: 1 });
      observer.observe(target);
    }
    return () => observer && observer.disconnect();
  }, [target]);

  const { items, isLoading } = state;
  return (
    <div>
      {items.map((item, idx) => {
        return <ListItem key={idx} item={item} />;
      })}

      <div ref={setTarget} className="Loading">
        {isLoading && "Loading..."}
      </div>
    </div>
  );
}

const PlaceHolder = () => <div>Loading Image...</div>;
export default InfiniteAndLazy;
