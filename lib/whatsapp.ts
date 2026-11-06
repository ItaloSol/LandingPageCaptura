// Contato e preços centralizados. Altere aqui e o site inteiro acompanha.

export const WHATSAPP_NUMBER = "5561999315616";
export const WHATSAPP_DISPLAY = "(61) 9 9931-5616";

// Atualizar todo mês de janeiro com o salário mínimo vigente.
export const SALARIO_MINIMO = 1621;

export const PRECO_ESSENCIAL = Math.floor(SALARIO_MINIMO / 2);
export const PRECO_COMPLETO = SALARIO_MINIMO;

export const PRAZO_ENTREGA = "até 5 dias úteis";
export const VALOR_HORA_AJUSTE = 120;

export const DEFAULT_MESSAGE =
  "Olá, Ítalo! Vim pelo site e quero saber como funciona a criação de um site profissional para o meu negócio.";

export function formatBRL(value: number) {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0,
  });
}

export function generateWhatsAppLink(message: string = DEFAULT_MESSAGE) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
