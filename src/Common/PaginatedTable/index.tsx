import React, { useEffect, useState } from "react";
import { Table, Pagination } from "antd";

interface PaginatedTableProps {
  fetchData: (
    page: number,
    limit: number
  ) => Promise<{ todos: any[]; total: number }>;
  columns: any[];
}

const PaginatedTable: React.FC<PaginatedTableProps> = ({
  fetchData,
  columns,
}) => {
  const [dataSource, setDataSource] = useState<any[]>([]);
  const [totalItems, setTotalItems] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const pageSize = 10;

  // Fetch data whenever the page changes
  useEffect(() => {
    const loadPageData = async () => {
      const response = await fetchData(currentPage, pageSize);
      setDataSource(response.todos);
      setTotalItems(response.total);
    };

    loadPageData();
  }, [currentPage]);

  // Handle pagination change
  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <Table
        dataSource={dataSource}
        columns={columns}
        rowKey="id"
        pagination={false} // Disable Ant Design's built-in pagination
      />
      <Pagination
        current={currentPage}
        pageSize={pageSize}
        total={totalItems}
        onChange={onPageChange}
        style={{ marginTop: "20px", textAlign: "center" }}
      />
    </div>
  );
};

export default PaginatedTable;
