import React, { useEffect, useState, useRef, useCallback, lazy } from "react";
import "./test.css";

const fakeFetch = (delay = 1000) =>
  new Promise((res) => setTimeout(res, delay));

function InfiniteAndLazy() {
  /* 아이템 개수와 현재 로딩 상태 */
  const [state, setState] = useState({ items: [], isLoading: true });
  const [target, setTarget] = useState(null);
  const [isLoad, setIsLoad] = useState(false);

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

  /* scroll 인터섹션 callback */
  const onIntersect = async ([entry], observer) => {
    if (entry.isIntersecting) {
      observer.unobserve(entry.target);
      await fetchItems();
      observer.observe(entry.target);
    }
  };

  /* scroll observer */
  useEffect(() => {
    let observer;
    if (target) {
      observer = new IntersectionObserver(onIntersect, { threshold: 1 });
      observer.observe(target);
    }
    return () => observer && observer.disconnect();
  }, [target]);

  const imgTag = useRef();

  // const onLazyIntersect = ([entry], lazyObserver) => {
  //   if (entry.isIntersecting) {
  //     lazyObserver.unobserve(entry.imgTag);

  //     lazyObserver.observe(entry.imgTag);
  //   }
  // };

  // useEffect(() => {
  //   let lazyObserver;
  //   if (isLoad) {
  //     console.log(isLoad)
  //     lazyObserver = new IntersectionObserver(onLazyIntersect, {
  //       threshold: 0.8,
  //     });
  //     setIsLoad(true);
  //     lazyObserver.observe(imgTag);
  //   }
  //   return () => lazyObserver && lazyObserver.disconnect();
  // }, []);

  const onLazyIntersect = ([entry], lazyObserver) => {
    if (entry.isIntersecting) {
      console.log("isIntersecting")
      lazyObserver.unobserve(entry.imgTag);

      lazyObserver.observe(entry.imgTag);
    }
  }

  useEffect(() => {
    let lazyObserver;
    if (isLoad) {
      lazyObserver = new IntersectionObserver(onLazyIntersect, { threshold: 0.8 });
      lazyObserver.observe(isLoad);
    }
    return () => lazyObserver && lazyObserver.disconnect();
  }, [isLoad]);

  const { items, isLoading } = state;
  return (
    <div>
      {items.map((item, idx) => {
        return (
          <img
            key={idx}
            ref={imgTag}
            //src={isLoad ? item.imgPath : ""}
            // ref={(elem) => (this.imgTag = elem)}
            src={item.imgPath}
          />
        );
      })}

      <div ref={setTarget} className="Loading">
        {isLoading && "Loading..."}
      </div>
    </div>
  );
}

// /* 리스트 아이템 */
// const ListItem = ({ item, isLoad }) => (
//   <div className="ListItem">
//     <img
//         src={isLoad ? item.imgPath : ''}
//         ref={elem => (this.imgg = elem)}
//       />
//     {/* <img src={item.imgPath} ref={setIsLoad}/> */}
//   </div>
// );
export default InfiniteAndLazy;
