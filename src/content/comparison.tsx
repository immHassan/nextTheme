import React from 'react';

type ComparisonTableProps = {
  title: string;
  headers: string[];
  rows: string[][];
};

const ComparisonTable: React.FC<ComparisonTableProps> = ({ title, headers, rows }) => (
  <section>
    <h2>{title}</h2>
    <table>
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <td key={cellIndex}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </section>
);

export default ComparisonTable;
