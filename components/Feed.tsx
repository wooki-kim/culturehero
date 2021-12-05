import React, {
  useState,
  useEffect,
  useMemo,
  useRef,
  useCallback,
} from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import styled from "styled-components";
import type { IProfile } from "../types";
import { useGetFeedListQuery } from "../store/feed";
import { throttle } from "lodash";
import { FunctionContainer, ExitButton, LikeButton } from "../styles/common";
import { Cat } from "./";
const FeedContianer = styled.li`
  width: 100%;
  height: calc(100vh - 50px);
  box-sizing: border-box;
  border-radius: 10px;
  position: relative;
  padding: 5px;
`;

const Feed = () => {
  const [page, setPage] = useState<number>(1);
  const [isTabnavOn, setIsTabnavOn] = useState<boolean>(true);
  const { data, error, isLoading } = useGetFeedListQuery(String(page));
  const [items, setItems] = useState<IProfile[]>([]);
  const tabSelectorRef = useRef(null);

  useEffect(() => {
    try {
      const savedPage = localStorage.getItem("page");
      const savedScroll = localStorage.getItem("scroll");
      if (savedPage !== undefined && savedScroll !== undefined) {
        console.log("로컬스토리지 페이지", savedPage);
        console.log("로컬스토리지 스크롤", savedScroll);
      }
    } catch (e) {
      console.log(e);
    }
  }, []);
  useEffect(() => {
    if (!isLoading && data != undefined) {
      setItems(items?.concat(data));
    }
  }, [data]);

  const throttledScroll = useMemo(
    () =>
      throttle(() => {
        if (!tabSelectorRef.current) return;
        const nextTabnavOn =
          window.scrollY === document.body.scrollHeight - window.innerHeight;
        if (nextTabnavOn) {
          setIsTabnavOn(!nextTabnavOn);
          setPage((prevState) => prevState + 1);
        }
      }, 200),
    [isTabnavOn]
  );

  useEffect(() => {
    window.addEventListener("scroll", throttledScroll);
    return () => {
      window.removeEventListener("scroll", throttledScroll);
    };
  }, [throttledScroll]);

  const router = useRouter();
  const handleClick = (path: string) => {
    localStorage.setItem("scroll", String(window.scrollY));
    localStorage.setItem("page", String(page));
    router.push(path);
  };
  if (error) {
    setPage(page - 1);
  }
  if (isLoading) return <>로딩중</>;
  return (
    <>
      <ul ref={tabSelectorRef}>
        {items?.map((item, key) => (
          <FeedContianer key={key} id={"feed" + (key + 1)}>
            <Cat item={item} />
            <FunctionContainer>
              <ExitButton onClick={() => alert("닫기")}>X</ExitButton>
              <LikeButton
                onClick={() => handleClick(`/detail/${item.profileIdx}`)}
              >
                상세 보기
              </LikeButton>
            </FunctionContainer>
          </FeedContianer>
        ))}
      </ul>
    </>
  );
};

export default Feed;
