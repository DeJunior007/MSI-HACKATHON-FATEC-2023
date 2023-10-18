import Swal from "sweetalert2";
import { FC } from "react";

interface ReportModalProps {
  funcionariosPresentes: string[];
}

const ReportModal: FC<ReportModalProps> = ({ funcionariosPresentes }) => {
  const gerarRelatorio = () => {
    Swal.fire({
      title: "Relatório de Presença",
      confirmButtonText: "Confirmar",
      reverseButtons: true,
      cancelButtonText: "Baixar PDF",
      showCancelButton: true,
      cancelButtonColor: "#164C8B",
      confirmButtonColor: "#57196A",
      html: `
        <div class="report-modal">
          <table class="funcionario-lista">
            <thead>
              <tr>
                <td class="funcionario-nome-t">Nome:</td>
                <td class="horario-batida-t">Horário de entrada:</td>
              </tr>
            </thead>
            <tbody>
              ${funcionariosPresentes
                .map((funcionarioEntrada) => {
                  const [nome, entrada] = funcionarioEntrada.split(" - ");
                  return `
                    <tr>
                      <td class="funcionario-nome">${nome}</td>
                      <td class="horario-batida">${entrada}</td>
                    </tr>
                  `;
                })
                .join("")}
            </tbody>
          </table>
        </div>
      `,
      icon: "info",
    });
  };

  return (
    <button
      className="border-2 rounded-lg h-full border-[#164C8B] p-1 font-bold rounded-full text-[#164C8B] outline-none"
      onClick={gerarRelatorio}
    >
      Gerar Relatório
    </button>
  );
};

export default ReportModal;
