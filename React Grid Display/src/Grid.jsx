import { range } from './utils';

const gridStyles = {
  width: '100px',
  height: '100px',
  border: 'solid grey',
  borderRadius: '5px',
};

function Grid({ numRows, numCols }) {
  const rows = [];

  for (let i = 0; i < numRows; i++) {
    const cells = [];
    for (let j = 0; j < numCols; j++) {
      cells.push(<div key={`${i}-${j}`} style={gridStyles} />);
    }
    rows.push(<div key={i} className="row">{cells}</div>);
  }

  return (
    <div className="grid">{rows}</div>
  );
}

export default Grid;