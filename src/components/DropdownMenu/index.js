import React from "react";
import "./styles.css";
import MenuItem from "../MenuItem";

export default function DropdownMenu() {
  return (
    <div class="dropdown">
      <MenuItem class="dropbtn" text="Menu 2 ﹀" />
      <div class="dropdown-content">
        <table className="table teste">
          <thead>
            <tr className="title">
              <td>Metodologia</td>
              <td>Cursos</td>
              <td>Ferramentas</td>
            </tr>
          </thead>
          <tbody >
            <tr>
              <td>Tudo sobre Inbound Marketing</td>
              <td>RD University</td>
              <td>Avalie seu funil de vendas</td>
            </tr>
            <tr>
              <td></td>
              <td>Introdução ao Inbound Marketing</td>
              <td>Compare suas métricas de Email Marketing</td>
            </tr>
            <tr>
              <td></td>
              <td>RD Station Marketing Basic</td>
              <td>Calcule o ROI do RD Station Marketing</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
