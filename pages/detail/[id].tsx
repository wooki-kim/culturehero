import styled from "styled-components";
import { InferGetServerSidePropsType } from "next";
import { useGetFeedQuery } from "../../store/feed";
import { Cat } from "../../components";
import { Main } from "../../styles/common";
interface IParam {
  query: {
    id: string;
  };
}
const Contianer = styled.section`
  width: 100%;
  height: calc(100vh - 50px);
  box-sizing: border-box;
  border-radius: 10px;
  position: relative;
  padding: 5px;
`;
const Detail = ({
  id,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { data, error, isLoading } = useGetFeedQuery(String(id));

  if (error) {
    return <>에러</>;
  }
  if (isLoading) {
    return <>로딩중</>;
  }
  return (
    <Main>
      <Contianer>
        <Cat item={data} page="1" />
      </Contianer>
    </Main>
  );
};

export const getServerSideProps = async (context: IParam) => {
  console.log("context");
  return {
    props: {
      id: context.query.id,
    },
  };
};
export default Detail;
