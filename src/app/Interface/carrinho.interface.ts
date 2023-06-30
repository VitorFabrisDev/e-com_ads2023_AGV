import { SafeResourceUrl } from "@angular/platform-browser";

export interface Carrinho {
  produto: number;
  descricao: string;
  quantidade: number; // Alterado para number
  valor: number;
  imagem: string | SafeResourceUrl ;
  id: number;
}