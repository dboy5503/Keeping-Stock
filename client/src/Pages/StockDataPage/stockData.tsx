import { useParams } from "react-router-dom";

export function StockDataPage() {
const { tikerSymbol } = useParams();
  return (
    <div>
      <h1>{tikerSymbol}</h1>
    </div>
  );
}



