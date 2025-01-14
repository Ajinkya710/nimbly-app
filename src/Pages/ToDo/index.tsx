import { useEffect } from "react";
import { Table, Pagination } from "antd";
import { useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { useAppDispatch } from "../../store";
import {
  selectIsLoading,
  selectPaginationMeta,
  selectToDoList,
} from "./store/selector";
import { setPage } from "./store/slice";
import { getToDoList } from "./store/action";

const ToDoList = () => {
  const dispatch = useAppDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  const todos = useSelector(selectToDoList);
  const isLoading = useSelector(selectIsLoading);
  const { currentPage, totalItems } = useSelector(selectPaginationMeta);
  const pageSize = 10;

  useEffect(() => {
    const skip = searchParams.get("skip");
    const limit = searchParams.get("limit");

    if (!skip || !limit) {
      setSearchParams({ skip: "0", limit: pageSize.toString() });
      return;
    }

    const page = Math.floor(parseInt(skip, 10) / pageSize) + 1;

    if (currentPage !== page) {
      dispatch(setPage(page));
    }
    dispatch(getToDoList());
  }, [searchParams]);

  const onPageChange = (page: number) => {
    const skip = (page - 1) * pageSize;
    setSearchParams({ skip: skip.toString(), limit: pageSize.toString() });
    dispatch(setPage(page));
    dispatch(getToDoList());
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Todo",
      dataIndex: "todo",
      key: "todo",
    },
    {
      title: "Completed",
      dataIndex: "completed",
      key: "completed",
      render: (completed: boolean) => (completed ? "Yes" : "No"),
    },
  ];

  return (
    <PageWrapper>
      <HeaderText>Here is your ToDo list:</HeaderText>
      <Table
        dataSource={todos}
        columns={columns}
        rowKey="id"
        pagination={false}
        loading={isLoading}
        scroll={{ x: 450 }}
      />
      <StyledPagination
        current={currentPage}
        pageSize={pageSize}
        total={totalItems}
        onChange={onPageChange}
      />
    </PageWrapper>
  );
};

export default ToDoList;

const PageWrapper = styled.div`
  padding: 1rem 4rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const HeaderText = styled.p`
  font-size: 1rem;
  font-weight: 500;
`;

const StyledPagination = styled(Pagination)`
  margin-top: 1rem;
  display: flex;
  justify-content: flex-end;

  .ant-pagination-options {
    display: none;
  }
`;
