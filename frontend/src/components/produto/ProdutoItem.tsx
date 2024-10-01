import { Produto } from "@/src/core"

export interface ProdutoItemProps {
    produto: Produto
}

export default function ProdutoItem (props: ProdutoItemProps) {
    const { produto } = props
    return <link href={`/produto/${produto.id}`}>{props.produto.nome}</link>
}