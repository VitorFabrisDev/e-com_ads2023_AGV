export interface Produto {
  id: number;
  nome: string;
  preco: number;
  imagem: string;
  categoria: {
    id: number;
    descricao: string;
  };
}