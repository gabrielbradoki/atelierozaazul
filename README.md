# atelierozaazul.github.io
atelierozaazul


/*
@import (reference) "../structure/global.less";


@keyframes "setaArraste" {
	from {
		left: -230px;
	}
	to {
		left: -250px;
	}
}
@-webkit-keyframes "setaArraste" {
	from {
		left: -230px;
	}
	to {
		left: -250px;
	}
}
@-moz-keyframes "setaArraste" {
	from {
		left: -230px;
	}
	to {
		left: -250px;
	}
}
@-moz-keyframes "spin" {
	100% {
		-moz-transform: rotate(360deg);
	}
}
@-webkit-keyframes "spin" {
	100% {
		-webkit-transform: rotate(360deg);
	}
}
@keyframes "spin" {
	100% {
		-webkit-transform: rotate(360deg);
		transform: rotate(360deg);
	}
}
@-webkit-keyframes "sk-bouncedelay" {
	0,80%,100% {
		-webkit-transform: scale(0);
	}
	40% {
		-webkit-transform: scale(1.0);
	}
}
@keyframes "sk-bouncedelay" {
	0,80%,100% {
		-webkit-transform: scale(0);
		transform: scale(0);
	}
	40% {
		-webkit-transform: scale(1.0);
		transform: scale(1.0);
	}
}
body.produto-arrastado {
	position: relative;
	overflow-x: hidden;
}
a {
	text-decoration: none;
	color: @color-4;
	&:hover {
		text-decoration: underline;
		color: @color-4;
	}
	&:visited {
		outline: 0;
		text-decoration: none;
	}
	&:focus {
		outline: 0;
		text-decoration: none;
		color: @color-4;
	}
	[class^="icon-"] {
		display: inline-block;
		text-decoration: none;
	}
	[class*=" icon-"] {
		display: inline-block;
		text-decoration: none;
	}
}
input[type="text"] {
	&:focus {
		outline: 0;
		text-decoration: none;
	}
}
input[type="password"] {
	&:focus {
		outline: 0;
		text-decoration: none;
	}
}
input[type="checkbox"] {
	&:focus {
		outline: 0;
		text-decoration: none;
	}
	margin: 4px 0 0;
}
input[type="radio"] {
	&:focus {
		outline: 0;
		text-decoration: none;
	}
	margin: 4px 0 0;
}
select {
	&:focus {
		outline: 0;
		text-decoration: none;
	}
	font-family: @font-padrao;
}
button {
	&:focus {
		outline: 0;
		text-decoration: none;
	}
	font-family: @font-padrao;
	border: 0;
}
input {
	font-family: @font-padrao;
}
textarea {
	font-family: @font-padrao;
}
select[readonly] {
	option {
		display: none;
	}
}
[class^="icon-"] {
	display: inline-block;
	text-align: center;
}
[class*=" icon-"] {
	display: inline-block;
	text-align: center;
}
img[src*=".gif"] {
	image-rendering: -webkit-optimize-contrast;
	image-rendering: optimize-contrast;
	image-rendering: optimizeQuality;
}
img[src*=".png"] {
	image-rendering: -webkit-optimize-contrast;
	image-rendering: optimize-contrast;
	image-rendering: optimizeQuality;
}
ul {
	list-style-type: none;
	&:after {
		display: table;
		content: "";
		clear: both;
	}
}
li {
	list-style-type: none;
}
.cb {
	clear: both;
}
fieldset {
	min-width: initial;
}
form {
	.control-group.error {
		.errorlist {
			margin: 0;
			color: @color_2;
			li {
				font-weight: bold;
				line-height: 12px;
				margin-bottom: 5px;
			}
		}
	}
	.control-group.erro {
		.errorlist {
			margin: 0;
			color: @color_2;
			li {
				font-weight: bold;
				line-height: 12px;
				margin-bottom: 5px;
			}
		}
	}
}
legend {
	i {
		margin-right: 10px;
	}
}
h3 {
	small {
		font-size: 20px;
		font-weight: 300;
		text-transform: none;
	}
}
table {
	th {
		background-color: @background_color_1;
	}
	h5 {
		margin: 0;
	}
	h6 {
		margin: 0;
	}
	width: 100%;
	.line-18 {
		line-height: 18px;
	}
	.font-15 {
		font-size: 15px;
		vertical-align: text-bottom;
	}
}
.table {
	th {
		border-collapse: collapse;
		vertical-align: middle;
		border-color: @border_color_14;
	}
	td {
		border-collapse: collapse;
		vertical-align: middle;
		border-color: @border_color_14;
	}
}
th {
	padding: 8px;
	border: 1px solid #e6e6e6;
}
tr {
	padding: 8px;
	border: 1px solid #e6e6e6;
}
td {
	padding: 8px;
	border: 1px solid #e6e6e6;
}
_ {
	&::-ms-reveal {
		margin: 4px 0 0;
		margin: 4px 0 0;
	}
}
.input-telefone {
	width: 120px;
}
.borda-principal {
	border-width: 2px 0 0;
	border-style: solid;
	border-color: @color-4;
}
.sem-borda {
	border: 0;
}
.sem-margem {
	margin: 0;
}
.nowrap {
	white-space: nowrap;
}
.form-horizontal.large-label {
	.control-label {
		width: 180px;
	}
	.controls {
		margin-left: 200px;
	}
}
.control-group.erro {
	.control-label {
		color: @color_2;
	}
	.help-block {
		color: @color_2;
	}
	.help-inline {
		color: @color_2;
	}
	.checkbox {
		color: @color_2;
	}
	.radio {
		color: @color_2;
	}
	input {
		color: @color_2;
		border-color: @border_color_1;
		-webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
		-moz-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
        box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
        
		&:focus {
			border-color: @border_color_2;
			-webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #d59392;
			-moz-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #d59392;
			box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #d59392;
		}
	}
	select {
		color: @color_2;
		border-color: @border_color_1;
		-webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
		-moz-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
		box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
		&:focus {
			border-color: @border_color_2;
			-webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #d59392;
			-moz-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #d59392;
			box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #d59392;
		}
	}
	textarea {
		color: @color_2;
		border-color: @border_color_1;
		-webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
		-moz-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
		box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
		&:focus {
			border-color: @border_color_2;
			-webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #d59392;
			-moz-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #d59392;
			box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #d59392;
		}
	}
	.input-prepend {
		.add-on {
			color: @color_2;
			background-color: @background_color_2;
			border-color: @border_color_1;
		}
	}
	.input-append {
		.add-on {
			color: @color_2;
			background-color: @background_color_2;
			border-color: @border_color_1;
		}
	}
}
.fancybox-overlay&+.tooltip {
	z-index: 8011;
}
.conteiner {
	max-width: 1140px;
	margin: 0 auto;
	padding: 0 20px;
}
.conteiner-principal {
	.conteiner {
		padding: 10px 20px;
	}
}
.tema-pequeno {
	.conteiner {
		max-width: 980px;
	}
	.acoes-conta {
		li {
			&:first-child {
				margin-right: 17px;
			}
		}
	}
	.listagem {
		.span6 {
			.imagem-produto {
				height: 250px;
			}
		}
		.produtos-carrossel[data-produtos-linha="2"] {
			.imagem-produto {
				height: 250px;
			}
		}
		.span4 {
			.imagem-produto {
				height: 220px;
			}
		}
		.produtos-carrossel[data-produtos-linha="3"] {
			.imagem-produto {
				height: 220px;
			}
		}
		.span3 {
			.imagem-produto {
				height: 160px;
			}
			.botao-favoritos {
				display: none;
			}
		}
		.produtos-carrossel[data-produtos-linha="4"] {
			.imagem-produto {
				height: 160px;
			}
			.botao-favoritos {
				display: none;
			}
		}
	}
	.formas {
		.accordion-heading {
			.forma-conteiner {
				.envio-preco {
					margin-right: 3%;
				}
			}
		}
	}
	.formas.envio {
		.accordion-heading {
			.forma-conteiner {
				.text-content {
					margin-right: 6%;
				}
			}
		}
	}

	#barraTopo {
		.canais-contato {
			ul {
				li {
					&:first-child {
						display: none;
					}
				}
			}
		}
	}
}
.zm-viewer {
	z-index: 100 !important;
	&:hover {
		display: block;
	}
	img {
		max-width: inherit;
	}
}
.input-conteiner {
	position: relative;
}
.titulo {
	font-family: @font-padrao;
	font-weight: 400;
	text-rendering: inherit;
}
.font-bold {
	font-weight: bold;
}
.botao {
	color: @color-4;
	font-size: 14px;
	line-height: normal;
	text-transform: none;
	padding: 6px 14px;
	display: inline-block;
	cursor: pointer;
	vertical-align: middle;
	text-align: center;
	background-color: @white;
    white-space: nowrap;
    border-left: none;
    border-radius: 0;
    border: 1px solid @color-4;

	&:hover {
		background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.25), rgba(0, 0, 0, 0.12));
		color: @color_4;
		text-decoration: none;
	}
	&:disabled {
		opacity: .6;
		cursor: default;
	}
	i {
		margin-right: 10px;
	}
}
.botao.disabled {
	opacity: .6;
	cursor: default;
}
.botao.principal {
	color: @white;
	text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
	background-color: @color-4;
}
.botao.pequeno {
	font-size: 12px;
	padding: 3px 10px;
	i {
		margin-right: 5px;
	}
}
.botao.grande {
	font-size: 26px;
	padding: 7px 15px;
}
.botao-input {
	padding: 7px 14px;
}
.botao.desativo {
	cursor: auto;
	opacity: .5;
	filter: alpha(opacity=50);
}

.canais-contato {
	ul {
		float: right;
		li {
			padding-left: 10px;
			margin-left: 10px;
			border-left: 1px solid rgba(255, 255, 255, 0.2);
			&:first-child {
				border: 0;
				margin-left: 0;
			}
			i {
				margin-right: 10px;
				font-size: 13px;
			}
		}
	}
	.tel-whatsapp {
		.fa {
			margin-right: 8px;
			font-size: 14px;
		}
	}
}


#cabecalho {
    width: 100%;
    margin: 0 auto;
    background-color: @color-1;

.conteudo-topo {
        .busca-mobile {
        .atalho-menu {
            width: 22px;
            line-height: 35px;

            &:before {
                font-size: 20px;
                content: "\f0c9";
            }
        }
    }
	.superior {
		padding: 20px 0;
		>div {
			min-height: auto;
		}
	}
}
.bem-vindo {
	display: inline-block;
}
.acoes-conta {
	margin: 0;
	li {
		float: left;
		&:first-child {
			margin-right: 15px;
		}
		>* {
			line-height: 20px;
		}
	}
	>li {
		i {
			display: inline-block;
			width: 20px;
			height: 20px;
			margin-right: 6px;
		}
	}
}
.inferior {
	.acoes-conta {
		float: right;
		width: 47%;
		background-color: @background_color_12;
		li {
			width: 50%;
			margin: 0;
			text-align: center;
			a {
				font-weight: 700;
				display: block;
				line-height: 40px;
				border-width: 1px;
				border-style: solid;
			}
			&:first-child {
				a {
					border-right: 0;
				}
			}
		}
	}
}
.carrinho {
	border-width: 1px;
	border-style: solid;
	border-color: @border_color_3;
	position: relative;
	&:after {
		display: table;
		content: "";
		clear: both;
	}
	>a {
		>* {
			float: left;
		}
		span.titulo {
			display: none;
		}
		i {
			display: block;
			width: 40px;
			height: 40px;
			line-height: 40px;
			font-size: 26px;
		}
		strong {
			font-size: 26px;
			margin: 0 6%;
			line-height: 40px;
		}
		span {
			line-height: 13px;
			padding: 8px 0 0;
			b {
				display: block;
				font-size: 14px;
			}
		}
		&:hover {
			text-decoration: none;
		}
	}
	&:hover {
		.carrinho-interno {
			display: block;
		}
	}
}
.produto-arrastado {
	.carrinho-interno {
		display: block;
	}
}
.carrinho.vazio {
	>a {
		span {
			float: none;
			display: block;
			margin-left: 55px;
			line-height: 40px;
			padding: 0;
			font-size: 13px;
		}
	}
	.carrinho-interno-ajax {
		display: none;
	}
}
.carrinho-interno {
	display: none;
	width: 320px;
	position: absolute;
	top: 40px;
	right: 0;
	z-index: 30;
	background-color: @white;
	padding: 20px;
	box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
	ul {
		margin: 0;
		max-height: 210px;
		overflow: auto;
	}
	li {
		vertical-align: middle;
		border-width: 0 0 1px;
		border-style: solid;
		*border-color: #ddd;
		border-color: @border_color_3;
		padding: 10px;
		&:hover {
			background-color: @background_color_1;
		}
		>* {
			display: inline-block;
			vertical-align: middle;
		}
		>span {
			>* {
				display: block;
			}
			i {
				margin-right: 5px;
			}
		}
	}
	.imagem-produto {
		position: relative;
		width: 80px;
		height: 80px;
		img {
			max-width: 100%;
			max-height: 100%;
			position: absolute;
			top: 0;
			bottom: 0;
			right: 0;
			left: 0;
			margin: auto;
		}
	}
	.nome-produto {
		width: 115px;
		max-height: 65px;
		overflow: hidden;
		margin-left: 10px;
		font-size: 11px;
		line-height: normal;
	}
	.preco-produto {
		float: right;
		margin: 20px 0 0;
		.preco-promocional {
			font-size: 12px;
			display: block;
		}
		.preco-venda {
			margin: 0;
		}
	}
	.produto-sku {
		display: none;
	}
	>div {
		margin: 20px 0 0;
		&:after {
			display: table;
			content: "";
			clear: both;
		}
		>span {
			float: left;
			>* {
				display: block;
			}
			>span {
				font-size: 15px;
			}
		}
		.botao {
			float: right;
			margin-top: 4px;
		}
	}
}
.carrinho-interno.hover {
	background-color: @background_color_13;
}
.carrinho-checkout {
	.atendimento {
		border-width: 1px;
		border-style: solid;
		padding: 5px;
		margin: 20px 0 0;
		li {
			padding: 10px 5px;
			a {
				cursor: pointer;
			}
			strong {
				display: block;
			}
			.display-table {
				display: table-cell;
				vertical-align: top;
				line-height: 17px;
			}
		}
		.icone-box {
			padding: 5px;
			border-width: 4px;
			border-style: solid;
			margin-right: 10px;
			font-size: 20px;
			text-align: center;
			float: left;
		}
	}
	.subtotal {
		strong {
			margin: 0;
		}
	}
	.cupom-codigo {
		padding: 5px;
		background-color: @background_color_14;
		border: 1px dashed #CCC;
	}
	.cupom {
		text-align: right;
	}
	.desconto {
		small {
			display: block;
			line-height: 10px;
		}
	}
	.formas {
		.accordion-heading {
			.bandeiras-pagamento {
				margin: 0;
				li {
					margin-top: 8px;
					margin-bottom: 8px;
				}
			}
		}
	}
	.placeholder-card {
		margin: 5px auto 10px;
		.jp-card-container {
			-ms-transform-origin: 0 0;
			-webkit-transform-origin: 0 0;
			transform-origin: 0 0;
			max-width: 1000px;
			height: 180px;
			.jp-card-identified {
				box-shadow: none;
			}
		}
	}
	#cartao_parcelas {
		font-size: 12px;
	}
	.jp-card {
		.jp-card-front {
			.jp-card-logo {
				top: 10%;
			}
		}
	}
	.formas.pagamento {
		.control-group {
			.help-block.erro {
				display: none;
			}
		}
		.control-group.error {
			.help-block.erro {
				display: block;
			}
		}
	}
	.identificacao {
		margin-bottom: 15px;
		hr.sem-margem {
			display: block;
		}
		.identificacao-inner {
			padding: 30px 0 20px;
		}
		.identificacao-title {
			margin-top: 10px;
		}
		.control-group {
			max-width: 500px;
			margin-bottom: 20px;
		}
		.login-data {
			margin-top: 0;
			.control-group {
				margin-bottom: 15px;
			}
		}
	}
	.conteiner-principal {
		#corpo {
			.conteiner {
				box-shadow: 0 -10px 0 0 @white, 0 3px 10px 0 rgba(0, 0, 0, 0.15);
			}
		}
	}
}
.checkout-alerta-seguro {
	text-align: left;
	background-color: @white;;
	padding: 0 10px 15px 15px;
	border: 1px solid #eee;
	border-radius: 4px;
	max-width: 400px;
	margin: 0 auto 50px;
	position: relative;
	overflow: hidden;
	.checkout-alerta-seguro-tit {
		font-size: 14px;
		line-height: 20px;
		margin: 15px 0 10px;
		color: @color_7;
		z-index: 2;
		position: relative;
	}
	.checkout-alerta-seguro-list {
		color: @color-4;
		z-index: 2;
		position: relative;
		margin: 0;
	}
	.checkout-alerta-seguro-item {
		.icon-ok {
			color: @color_7;
			z-index: 2;
			position: relative;
		}
	}
	.checkout-alerta-seguro-icon {
		position: absolute;
		font-size: 180px;
		bottom: -35px;
		right: -5px;
		color: @color_8;
		z-index: 1;
	}
}
.busca {
	position: relative;
    padding: 5px;
    
    &:hover {
        background-image: none;
    }
	form {
		margin: 0;
	}
	input {
		margin: 0;
		width: 94%;
	}
	.botao-busca {
		position: absolute;
		right: 5px;
		top: 5px;
        height: 40px;
        
    @media (max-width: 480px) {
            height: 52px;
            position: absolute;
            top: 0;
        }
	}
}
.logo {
	margin: 0;
	a {
        height: 120px;
        width: 120px;
        display: block;
        background: url('@{img-dir}1fdugcSgKu1W4LiqG8D3AJrBF74idu5KV') no-repeat;
        background-size: contain;
        color: transparent;
        margin: 0 auto;
		img {
			position: absolute;
			top: 0;
			bottom: 0;
			left: 0;
			right: 0;
			margin: auto;
			max-height: 100%;
		}
	}
}
.menu {
	ul {
		margin: 0;
		li {
			&:after {
				display: table;
				content: "";
				clear: both;
			}
		}
	}
	a {
		display: block;
		white-space: nowrap;
		vertical-align: middle;
		&:hover {
			text-decoration: none;
			color: @color-4;
		}
	}
	.titulo {
		display: inline-block;
		white-space: normal;
		font-size: 16px;
		vertical-align: middle;
	}
	li {
		padding: 0 20px;
		>a {
			i {
				display: none;
				font-size: 9px;
				width: 15px;
				height: 15px;
				line-height: 15px;
				vertical-align: middle;
				margin-left: 10px;
			}
		}
		&:hover {
			>a {
				.fundo-secundario {
					background-color: @color-4;
				}
			}
		}
	}
	li.com-filho {
		position: relative;
		&:hover {
			z-index: 201;
		}
		>a {
			i {
				display: inline-block;
			}
		}
	}
	.nivel-dois {
		padding: 10px 0;
		background-color: @white;
		box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
		min-width: 100%;
		a {
			color: @color-4;
			line-height: 40px;
			i {
				float: right;
				margin-top: 10px;
			}
			&:hover {
				*text-decoration: underline;
			}
		}
		li {
			&:hover {
				background-color: @background_color_12;
				>.nivel-tres {
					display: block;
				}
			}
			&:first-child {
				border: 0;
			}
			border-width: 1px 0 0;
			border-style: solid;
			*border-color: #ddd;
		}
		.com-filho {
			i {
				position: absolute;
				right: 20px;
				top: -3px;
			}
			>a {
				margin-right: 30px;
			}
		}
	}
	.nivel-tres {
		background-color: @white;
		box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
		display: none;
		position: absolute;
		left: 100%;
		top: 0;
	}
}
.menu-responsivo {
	i {
		font-size: 9px;
		width: 15px;
		height: 15px;
		line-height: 15px;
		vertical-align: middle;
		margin-left: 10px;
	}
}
.menu.lateral {
	.nivel-um {
		>li {
			>a {
				background-color: @white;
				box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
				padding: 0 20px;
			}
			padding: 0;
		}
	}
	a {
		i {
			float: right;
			margin-top: 10px;
		}
	}
	.ativo {
		background-color: @background_color_17;
	}
	li {
		z-index: 15;
	}
	.nivel-dois {
		min-width: 0;
	}
	.titulo {
		margin: 10px 0;
	}
	.com-filho {
		.titulo {
			margin-right: 20px;
		}
		&:hover {
			z-index: 25;
		}
	}
	.borda-principal {
		border-width: 0;
	}
	.com-filho.borda-principal {
		border-width: 2px 0 0;
	}
}
.menu.lateral.outras {
	.nivel-um {
		li {
			&:hover {
				a {
					background-color: @background_color_12;
				}
			}
		}
	}
	li {
		border: 0;
		.titulo {
			font-size: 13px;
		}
	}
}

.menu.lateral.fechado {
	.com-filho {
		position: relative;
		>ul {
			position: absolute;
			left: 100%;
			top: 0;
			display: none;
		}
		&:hover {
			>ul {
				display: block;
			}
		}
	}
	.nivel-dois {
		padding: 0;
	}
	.com-filho.borda-principal {
		border-width: 0;
	}
	.nivel-um {
		>li {
			strong {
				white-space: normal;
			}
		}
		.com-filho {
			i {
				position: absolute;
				right: 20px;
				top: 2px;
			}
			>a {
				padding-right: 40px;
			}
		}
	}
}
.menu.lateral.aberto {
	.nivel-dois {
		>li {
			>a {
				white-space: normal;
			}
		}
	}
}
.direita {
	.menu.lateral {
		.nivel-tres {
			right: 100%;
			left: auto;
		}
		.nivel-dois {
			i {
				transform: rotate(180deg);
				-webkit-transform: rotate(180deg);
				-ms-transform: rotate(180deg);
			}
		}
	}
	.menu.lateral.fechado {
		ul {
			right: 100%;
			left: auto;
		}
		i {
			transform: rotate(180deg);
			-webkit-transform: rotate(180deg);
			-ms-transform: rotate(180deg);
		}
	}
}
.tema-facebook {
	.menu.superior {
		.nivel-um {
			>li {
				padding: 0 10px;
				>a {
					line-height: 10px;
				}
			}
		}
		.nivel-dois {
			top: 40px;
		}
	}

}
.coluna {
	>div {
		margin-bottom: 20px;
	}
}
#corpo {
	.conteiner {
		>div {
			margin-bottom: 20px;
		}
	}
	margin-bottom: 30px;
}
.pagina-inicial {
	.listagem {
		>.titulo {
			display: none;
		}
	}
}
.listagem {
	>ul {
		margin: 0;
	}
	.listagem-linha {
		padding-top: 20px;
		margin-top: 20px;
		border-width: 1px 0 0;
		border-style: solid;
		&:first-child {
			padding: 20px 0 0;
			margin: 0;
			border: 0;
		}
		>ul {
			margin-left: -1%;
		}
		li {
			border-width: 0 0 0 1px;
			border-style: dashed;
			&:first-child {
				border: 0;
			}
		}
	}
	.listagem-item {
		position: relative;
		padding: 10px;
		transition: box-shadow .1s;
		margin-left: 7.127659574468085%;
		.imagem-produto {
			position: relative;
			box-shadow: none;
			margin: 0;
			.imagem-zoom {
				display: none;
			}
		}
		.imagem-produto.has-zoom {
			img {
				transition: opacity .5s ease-in-out;
				-moz-transition: opacity .5s ease-in-out;
				-webkit-transition: opacity .5s ease-in-out;
			}
			.imagem-zoom {
				display: block;
				*display: none;
				-ms-filter: "alpha(opacity=0)";
				filter: alpha(opacity=0);
				-moz-opacity: 0;
				-khtml-opacity: 0;
				opacity: 0;
			}
		}
		&:hover {
			.imagem-produto.has-zoom {
				.imagem-zoom {
					*display: block;
					-ms-filter: "alpha(opacity=100)";
					filter: alpha(opacity=100);
					-moz-opacity: 1;
					-khtml-opacity: 1;
					opacity: 1;
				}
				.imagem-principal {
					opacity: 0;
				}
			}
		}
		.nome-produto {
			font-size: 14px;
			line-height: 18px;
			display: inline-block;
			min-height: 40px;
			word-wrap: break-word;
			word-break: break-word;
		}
	}
	.listagem-item.arrastar {
		background-color: @white;
	}
	.bandeiras-produto {
		.bandeira-carrinho {
			background-color: @background_color_20;
		}
		.adicionado-carrinho {
			display: none;
		}
	}
	.titulo {
		margin: 15px 0;
	}
	.indisponivel {
		.imagem-produto {
			border-color: @border_color_3;
		}
	}
	.imagem-produto {
		img {
			max-width: 100%;
			max-height: 100%;
			position: absolute;
			top: 0;
			bottom: 0;
			left: 0;
			right: 0;
			margin: auto;
		}
	}
	.info-produto {
		padding: 15px 5px 10px;
		position: relative;
	}
	.span6 {
		.imagem-produto {
			height: 300px;
		}
	}
	.produtos-carrossel[data-produtos-linha="2"] {
		.imagem-produto {
			height: 300px;
		}
	}
	.span4 {
		.imagem-produto {
			height: 250px;
		}
	}
	.produtos-carrossel[data-produtos-linha="3"] {
		.imagem-produto {
			height: 250px;
		}
	}
	.span3 {
		.imagem-produto {
			height: 180px;
		}
		.listagem-item {
			.nome-produto {
				min-height: 55px;
			}
		}
	}
	.produtos-carrossel[data-produtos-linha="4"] {
		.imagem-produto {
			height: 180px;
		}
		.listagem-item {
			.nome-produto {
				min-height: 55px;
			}
		}
	}
	.preco-produto {
		>div {
			margin: 3px 0;
		}
	}
	.titulo-categoria {
		display: block;
		font-size: 16px;
		margin: 40px 0 0;
		padding: 10px 0;
		transition: all .2s ease;
		&:hover {
			text-decoration: none;
			background: rgba(0, 0, 0, 0.05);
			padding-left: 15px;
		}
		&:first-child {
			margin-top: 20px;
		}
	}
	.produtos-carrossel {
		position: relative;
		padding: 0 20px;
		>ul {
			margin: 0;
		}
		.listagem-linha {
			li {
				.listagem-item {
					margin: 5px 10px;
				}
			}
		}
		.listagem-linha.flexslider {
			overflow: visible;
			.flex-direction-nav {
				.flex-prev {
					padding: 40px 0;
					background: transparent;
					margin-top: -55px;
					left: -25px;
					opacity: .7;
					&:hover {
						opacity: 1;
					}
					&:before {
						content: "";
						display: block;
						width: 30px;
						height: 30px;
						background: url(../img/nav-thumbs.png) 0 0;
					}
				}
				.flex-next {
					padding: 40px 0;
					background: transparent;
					margin-top: -55px;
					right: -25px;
					opacity: .7;
					&:hover {
						opacity: 1;
					}
					&:before {
						content: "";
						display: block;
						width: 30px;
						height: 30px;
						background: url(../img/nav-thumbs.png) -90px 0;
					}
				}
			}
		}
	}
}
.listagem-linha {
	>ul {
		margin: 0;
	}
}
.listagem.com-caixa {
	.listagem-linha {
		>ul {
			margin: 0;
		}
		border: 0;
		margin: 0;
		ul {
			li {
				border: 0;
			}
		}
	}
	.listagem-item {
		margin: 0;
		box-shadow: 0 0 2px rgba(0, 0, 0, 0.33);
		border: 5px solid rgba(0, 0, 0, 0.035);
		background-color: @background_color_19;
		transition: transform .08s ease 0;
		-webkit-transition: -webkit-transform .08s ease 0;
		&:hover {
			box-shadow: 0 0 10px rgba(0, 0, 0, 0.28);
			outline: 1px solid rgba(0, 0, 0, 0.1);
			outline: 0;
		}
		&:active {
			box-shadow: 0 0 10px rgba(0, 0, 0, 0.28);
			outline: 1px solid rgba(0, 0, 0, 0.1);
		}
		.acoes-produto {
			border-style: solid;
		}
	}
	.listagem-item.arrastar {
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
		border-radius: 2px;
	}
	.listagem-item.indisponivel {
		overflow: hidden;
		background-color: @background_color_17;
	}
}
x {
	&:-moz-any-link {
		outline: 0;
		outline: 0;
	}
}
.listagem-item.arrastar {
	z-index: 999999;
	transform-origin: 50% 50% 0;
	-webkit-transform-origin: 50% 50% 0;
	transform: scale(0.8);
	-webkit-transform: scale(0.8);
	.acoes-produto {
		display: none;
	}
	.produto-sobrepor {
		cursor: move;
	}
}
.preco-produto {
	strong.titulo {
		font-size: 16px;
		white-space: nowrap;
	}
	.preco-venda {
		font-size: 13px;
		margin-right: 5px;
	}
	.preco-a-partir {
		.preco-venda {
			&:not(.titulo) {
				font-size: 12px;
				margin: 0;
			}
		}
	}
}
.listagem.aproveite-tambem {
	.listagem-item {
		.nome-produto {
			font-weight: 600;
		}
	}
	.preco-parcela {
		font-size: 11px;
	}
}
.listagem-item {
	.acoes-produto {
		position: absolute;
		right: 0;
		left: 0;
		bottom: 20%;
		background-color: @background_color_21;
		text-align: center;
		padding: 10px 0;
		border-width: 1px 0;
		border-style: dashed;
		z-index: 15;
		opacity: 0;
		filter: alpha(opacity=0);
		transition: opacity ease-in-out .08s, bottom ease-out .08s;
		.botao-favoritos {
			height: 18px;
			line-height: 18px;
			margin-left: 10px;
		}
	}
	&:hover {
		.acoes-produto {
			bottom: 40%;
			opacity: 1;
			filter: alpha(opacity=100);
		}
		.produto-avise {
			opacity: 1;
			filter: alpha(opacity=100);
			top: auto;
			bottom: 0;
		}
	}
	.produto-sobrepor {
		display: block;
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		z-index: 10;
		background-color: @background_color_22;
	}
	.produto-avise {
		opacity: 0;
		filter: alpha(opacity=0);
		position: absolute;
		z-index: 20;
		top: 100%;
		bottom: 0;
		left: 0;
		right: 0;
		padding: 5px;
		transition: opacity ease-in-out .08s, top ease-out .08s;
		strong {
			display: block;
			font-size: 16px;
		}
		.avise-me-list {
			background-color: @background_color_23;
			padding: 10px;
			text-align: center;
			line-height: 15px;
			.avise-me-list-descr {
				font-weight: 600;
				color: @white;
				font-size: 13px;
			}
			.avise-me-list-btn {
				margin-top: 15px;
			}
		}
	}
}
.listagem-item.indisponivel {
	overflow: hidden;
	background-color: @background_color_17;
	.imagem-produto {
		img {
			opacity: .4;
			-webkit-filter: grayscale(100%);
			-moz-filter: grayscale(100%);
			-ms-filter: grayscale(100%);
			-o-filter: grayscale(100%);
			filter: grayscale(100%);
			filter: gray;
		}
	}
	&:hover {
		.imagem-produto.has-zoom {
			.imagem-zoom {
				opacity: .4;
			}
		}
		.acoes-produto {
			display: none;
		}
	}
	.info-produto {
		.nome-produto {
			opacity: .4;
		}
	}
	.bandeiras-produto {
		z-index: 15;
		span {
			display: none;
		}
		.bandeira-indisponivel {
			display: inline-block;
		}
	}
}
.listagem-item.produto-adicionado {
	.bandeiras-produto {
		z-index: 15;
		.adicionado-carrinho {
			display: inline-block;
		}
	}
}
.bandeiras-produto {
	position: absolute;
	top: 10px;
	left: 10px;
	span {
		display: inline-block;
		padding: 0 10px;
		line-height: 17px;
		color: @white;
		text-transform: uppercase;
		font-size: 10px;
		font-weight: 600;
		margin: 0 3px 3px 0;
		border: 1px solid @white;
		box-sizing: border-box;
		box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
		white-space: nowrap;
	}
}
.bandeira-novo {
	background-color: @background_color_24;
}
.marcas&+.listagem {
	.titulo-categoria {
		&:first-child {
			margin-top: 40px;
		}
	}
}
.componente {
	.interno {
		padding: 20px;
	}
	.titulo {
		font-size: 18px;
		margin-bottom: 20px;
		display: block;
		i {
			float: right;
			font-size: 24px;
			margin-top: -4px;
		}
	}
	background-color: @background_color_29;
}
.caixa-sombreada {
	padding: 20px;
	box-shadow: 0 0 5px rgba(0, 0, 0, 0.25);
}
.caixa-destaque {
	margin: 100px 0;
	text-align: center;
}
.fale-conosco {
	ul {
		margin: 0;
		li {
			i {
				width: 18px;
				height: 18px;
				line-height: 18px;
				margin-right: 10px;
			}
		}
	}
}
.sugestoes {
	background-color: @white;
	padding: 0;
	box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
	* {
		border-color: @border_color_3;
	}
	>.titulo {
		display: block;
		padding: 15px 20px;
		margin: 0;
		line-height: 20px;
		border-width: 0 0 1px;
		border-style: solid;
		font-size: 17.5px;
	}
	>ul {
		margin: 0;
		padding: 20px;
	}
	ul {
		li {
			position: relative;
			margin-top: 20px;
			padding-top: 20px;
			border-width: 1px 0 0;
			border-style: solid;
			&:first-child {
				border: 0;
				margin: 0;
				padding: 0;
			}
			&:after {
				display: table;
				content: "";
				clear: both;
			}
		}
	}
	.info-produto {
		float: right;
		width: 100px;
	}
	.imagem-produto {
		margin-right: 100px;
		width: auto;
		height: 110px;
		border-width: 1px;
		border-style: solid;
		position: relative;
		img {
			max-width: 90%;
			max-height: 90%;
			position: absolute;
			top: 0;
			bottom: 0;
			left: 0;
			right: 0;
			margin: auto;
		}
	}
	.acoes-compra {
		>a {
			display: block;
			width: 50px;
			height: 49px;
			float: left;
		}
	}
	.preco-produto {
		height: 40px;
		padding: 10px;
		border-style: solid;
		border-width: 1px 1px 1px 0;
		>* {
			display: block;
		}
	}
	.nome-produto {
		height: 40px;
		padding: 10px;
		border-style: solid;
		border-width: 1px 1px 1px 0;
		line-height: 15px;
		overflow: hidden;
		text-overflow: ellipsis;
		span {
			font-size: 11px;
		}
	}
	.preco-produto.fundo-secundario {
		height: 42px;
		border: 0;
	}
	.preco-produto.fundo-principal {
		height: 42px;
		border: 0;
	}
	.preco-a-partir {
		.preco-venda {
			line-height: normal;
		}
	}
	.com-promocao {
		.preco-venda {
			font-size: 11px;
			line-height: 20px;
		}
	}
	.preco-promocional {
		font-size: 12px;
		white-space: nowrap;
		display: block;
		font-weight: normal;
	}
	.preco-venda {
		font-size: 12px;
		white-space: nowrap;
		display: block;
		font-weight: normal;
	}
	.preco-venda.titulo {
		font-size: 12px;
		white-space: nowrap;
		display: block;
		font-weight: normal;
	}
	.preco-promocional.titulo {
		font-size: 12px;
		white-space: nowrap;
		display: block;
		font-weight: normal;
	}
	.comprar {
		text-align: center;
		font-size: 28px;
		line-height: 48px;
	}
	.ver-mais {
		border-style: solid;
		border-width: 0 0 1px;
		>* {
			text-align: center;
			display: block;
		}
		i {
			font-size: 16px;
			margin: 8px 0 0;
		}
	}
}
.banner {
	.sugestoes {
		position: absolute;
		top: 0;
		bottom: 0;
		width: inherit;
		max-height: 100%;
		overflow-y: auto;
	}
	.componente {
		position: absolute;
		top: 0;
		bottom: 0;
	}
	.newsletter {
		width: inherit;
		padding: 0;
		.titulo {
			margin: 0;
			padding: 20px;
		}
		.interno {
			padding: 0;
			position: relative;
			min-height: 100%;
			.interno-conteudo {
				position: absolute;
				bottom: 20px;
				left: 20px;
				right: 20px;
				.alert {
					position: absolute;
					bottom: 20px;
				}
			}
		}
	}
	position: relative;
	.flex-control-nav {
		width: auto;
		bottom: 10px;
		right: 10px;
		padding: 5px;
		z-index: 2;
	}
	.flexslider {
		.slides {
			>li {
				position: relative;
			}
		}
	}
	.flex-control-paging {
		li {
			margin: 0 2px;
			vertical-align: middle;
			a {
				width: 10px;
				height: 10px;
				margin: 1px;
				background: transparent;
				border: 1px solid @white;
				border-radius: 10px;
				box-shadow: none;
				&:hover {
					background: transparent;
				}
			}
			a.flex-active {
				width: 12px;
				height: 12px;
				margin: 0;
				background: @white;
			}
		}
	}
}
.newsletter {
	input[type="text"] {
		width: 90%;
		margin: 0;
	}
	.input-conteiner {
		margin: 15px 0 0;
	}
	.botao {
		position: absolute;
		right: 0;
		top: 0;
		z-index: 5;
	}
	.newsletter-confirmacao {
		.icon-ok {
			float: left;
			color: @color_9;
			margin-top: 5px;
		}
		span {
			display: block;
			margin-left: 47px;
			padding: 5px 0;
		}
	}
}
#modalNewsletter {
	.componente {
		background: @white;
		border: 0;
		.interno {
			padding: 15px;
		}
		.titulo {
			i {
				font-size: 40px;
			}
			font-size: 25px;
			margin-bottom: 15px;
		}
		.texto-newsletter {
			font-size: 15px;
		}
	}
	.newsletter {
		.input-conteiner {
			margin-top: 20px;
		}
		.botao {
			font-size: 20px;
			padding: 10px 15px;
		}
		.newsletter-confirmacao {
			span {
				font-size: 15px;
				line-height: 18px;
			}
		}
	}
	.newsletter-cadastro {
		input {
			padding: 10px;
		}
	}
}
#barraNewsletter {
	box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
	position: fixed;
	width: 100%;
	top: 0;
	z-index: 100000;
	background: @black;
	color: @white;
	.componente {
		background: transparent;
		border: 0;
		.interno {
			padding: 10px 0;
		}
		.titulo {
			display: none;
		}
		.interno-conteudo {
			text-align: center;
			min-height: 30px;
			font-size: 0;
		}
		.texto-newsletter {
			display: inline-block;
			white-space: nowrap;
			text-align: center;
			text-overflow: ellipsis;
			line-height: 30px;
			padding: 0 1% 0 0;
			overflow: hidden;
			vertical-align: top;
			font-size: 16px;
			margin: 0;
		}
		.alert {
			display: inline-block;
			white-space: nowrap;
			text-align: center;
			text-overflow: ellipsis;
			line-height: 30px;
			padding: 0 1% 0 0;
			overflow: hidden;
			vertical-align: top;
			font-size: 16px;
			padding: 0 10px;
			line-height: 28px;
			font-size: 13px;
			.close {
				right: -5px;
			}
		}
		.input-conteiner {
			margin: 0;
		}
		div.newsletter-cadastro {
			display: inline-block;
			overflow: hidden;
			text-overflow: ellipsis;
			text-align: left;
		}
		.newsletter-confirmacao {
			display: inline-block;
			overflow: hidden;
			text-overflow: ellipsis;
			text-align: left;
			.icon-ok {
				margin-top: 2px;
				font-size: 25px;
			}
			span {
				text-align: left;
				margin-left: 30px;
				font-size: 15px;
			}
		}
		div.hide {
			display: none;
		}
		input[type="text"] {
			width: auto;
			margin-right: 5px;
			border-radius: 2px;
		}
		.botao {
			position: static;
			line-height: 13px;
			padding-bottom: 8px;
		}
		.newsletter-assinar {
			&:before {
				display: none;
			}
			&:after {
				content: "ASSINAR";
				font-family: @font-padrao;
				font-size: 12px;
				font-weight: bold;
			}
		}
	}
	.show-hide {
		position: absolute;
		top: 0;
		right: 10px;
		padding: 0 10px 5px;
		font-size: 23px;
		color: @white;
		background: #444;
		border-bottom-left-radius: 5px;
		border-bottom-right-radius: 5px;
	}
}
#barraNewsletter.posicao-rodape {
	position: static;
	.conteiner {
		background: transparent;
		border: 0;
		box-shadow: none;
		padding: 0;
	}
	.componente {
		.interno {
			padding: 20px 0;
		}
	}
}
.avise-me {
	text-align: center;
	.avise-tit {
		display: block;
		font-weight: bold;
		font-size: 30px;
	}
	.avise-descr {
		display: block;
		font-size: 15px;
		margin: 20px 0 30px;
	}
	.avise-input {
		input {
			padding: 10px;
			height: 40px;
		}
		label {
			position: relative;
		}
		.avise-icon {
			position: absolute;
			cursor: text;
			left: 15px;
			margin: 12px 0;
			color: @color-4;
		}
		.avise-email {
			padding-left: 40px;
		}
	}
	.avise-btn {
		overflow: hidden;
		.botao {
			padding: 6px 20px 8px;
		}
	}
}
#avise-me-cadastro {
	.avise-me {
		.avise-input {
			input {
				width: 100%;
				-webkit-box-sizing: border-box;
				-moz-box-sizing: border-box;
				box-sizing: border-box;
			}
			label {
				margin-left: 0;
				width: 100%;
			}
		}
	}
}
#avise-me-sucesso {
	text-align: center;
	padding: 30px;
	.avise-suc-tit {
		display: block;
		font-size: 30px;
	}
	.avise-suc-descr {
		display: block;
		font-size: 15px;
		margin: 20px 0 10px;
	}
}
.secao-banners.empty {
	display: none;
}
.conteudo {
	>.row-fluid {
		margin-bottom: 20px;
	}
	h1 {
		font-size: 30px;
	}
}
.banner.cheio&+.row-fluid {
	margin-top: 20px;
}
.flexslider {
	background: 0;
	margin: 0;
	border: 2px solid transparent;
	overflow: hidden;
	.sem-banner {
		.caixa-vazia {
			left: 0;
			right: 0;
		}
	}
}
.flexslider.carousel {
	background: @white;
}
.flex-direction-nav {
	a {
		&:before {
			display: none;
		}
		width: 30px;
		height: 30px;
		margin-top: -15px;
		background: url(../img/bg_direction_nav.png) no-repeat 0 2px;
		text-indent: -99999px;
	}
	.flex-next {
		background-position: -28px 2px;
		color: @color_11;
		text-shadow: none;
	}
	.flex-disabled {
		opacity: .3 !important;
		filter: alpha(opacity=30);
	}
}
.banner.lateral {
	.flexslider {
		.slides {
			>li {
				display: block;
				margin-bottom: 10px;
			}
			li {
				img {
					width: auto;
				}
			}
		}
	}
}
.info-banner {
	max-width: 400px;
	word-wrap: break-word;
	font-size: 40px;
	line-height: 45px;
	margin: 0;
	position: absolute;
	left: 20px;
	bottom: 20px;
	z-index: 20;
	padding: 15px;
	color: @white;
	background-color: @background_color_23;
}
.sem-banner {
	text-align: center;
	.caixa-vazia {
		border-width: 3px;
		border-style: dashed;
		border-radius: 3px;
		position: absolute;
		top: 0;
		bottom: 0;
		width: inherit;
		max-width: 100%;
		background-color: @background_color_1;
	}
	.alinhar-texto {
		display: table;
		height: 100%;
		width: 100%;
		position: relative;
		p {
			*position: absolute;
			*top: 50%;
			margin: 0;
			display: table-cell;
			vertical-align: middle;
		}
		.color2 {
			display: block;
			*position: relative;
			*top: -50%;
		}
	}
	.color2 {
		display: inline-block;
		font-size: 16px;
	}
}
.vitrine {
	.sem-banner {
		height: 170px;
	}
}
.cheio {
	.sem-banner {
		height: 220px;
	}
}
.lateral-fulbanner {
	position: absolute;
	top: 0;
	bottom: 0;
	max-height: 99%;
}
.tarja {
	vertical-align: middle;
	ul {
		margin: 0;
		padding: 8px 0;
		li {
			display: inline-block;
			vertical-align: middle;
			text-align: center;
			>* {
				display: inline-block;
				vertical-align: middle;
			}
			p {
				font-size: 11px;
				text-transform: uppercase;
				text-align: left;
				line-height: 15px;
				margin: 0 0 0 7px;
				span {
					display: block;
				}
			}
		}
	}
	strong {
		font-size: 34px;
		font-weight: 800;
	}
	.dois-itens {
		li {
			width: 49.5%;
		}
	}
	.tres-itens {
		li {
			width: 33%;
		}
	}
	.quatro-itens {
		li {
			width: 24.5%;
		}
	}
	.cinco-itens {
		li {
			width: 19.5%;
		}
	}
	* {
		color: @white;
	}
}
.marcas {
	position: relative;
	.slides {
		li {
			a {
				display: block;
				height: 60px;
				position: relative;
			}
		}
	}
	.flexslider {
		overflow: hidden;
		box-shadow: none;
		margin: 10px 0;
		ul {
			li {
				img {
					max-height: 100%;
					position: absolute;
					top: 0;
					bottom: 0;
					left: 0;
					right: 0;
					margin: auto;
					width: auto;
					height: auto;
					display: inline-block;
				}
			}
		}
	}
	.marca-nome {
		line-height: 60px;
		text-align: center;
	}
}
.marcas.span12 {
	float: none;
}
.marca-info {
	overflow: hidden;
	.image {
		img {
			width: auto;
			height: auto;
			max-width: 150px;
			max-height: 100px;
		}
	}
	.image&+.titulo {
		margin-right: 160px;
	}
	.image&+.titulo&+p {
		margin-right: 160px;
	}
	p {
		font-size: 14px;
	}
}
.breadcrumbs {
	border-style: solid;
	border-width: 1px 0;
	padding: 10px 0;
	margin: 0 0 20px;
	ul {
		margin: 0;
		li {
			float: left;
			border-left: 1px solid rgba(0, 0, 0, 0.1);
			a {
				color: @color-4;
			}
			&:first-child {
				border: 0;
				* {
					padding-left: 0;
				}
			}
			* {
				font-size: 11px;
				padding: 0 10px;
			}
		}
	}
}
.info-principal-produto {
	.breadcrumbs {
		border: 0;
		padding: 0;
		margin: 0 0 10px;
		ul {
			li {
				border: 0;
				&:after {
					content: "/";
					margin: 0 5px 0 2px;
				}
				* {
					padding: 0;
					font-size: 11px;
				}
				.fa {
					padding-right: 5px;
				}
			}
		}
	}
}
.produto {
	.principal {
		>*&+* {
			padding: 0 0 25px;
		}
		>* {
			&:last-child {
				border: 0;
			}
		}
		.atributos {
			padding-bottom: 5px;
		}
	}
	>.row-fluid {
		&:first-child {
			padding-bottom: 20px;
		}
	}
	>.row-fluid&+.row-fluid {
		margin-bottom: 20px;
	}
	.nome-produto {
		font-size: 18px;
		line-height: normal;
		margin: 0;
	}
	.codigo-produto {
		font-size: 11px;
		padding: 15px 0;
		border-bottom: 1px solid rgba(0, 0, 0, 0.1);
		margin-bottom: 20px;
		&:after {
			display: table;
			content: "";
			clear: both;
		}
		span[itemprop="sku"] {
			word-break: break-word;
		}
		>span&+span {
			display: block;
			margin-top: 5px;
		}
		.trustvox-stars {
			margin: 5px 0 -5px;
			overflow: hidden;
			div {
				display: inline-block;
			}
			a {
				&:hover {
					text-decoration: none;
				}
			}
			.ts-shelf-container {
				.ts-shelf-rate-count {
					left: 0;
				}
			}
		}
	}
	.tag-produto {
		font-size: 11px;
		font-weight: normal;
		padding: 0 6px 1px;
		margin-left: 3px;
	}
	.conteiner-imagem {
		text-align: center;
		>div {
			max-width: 100%;
			padding: 0 0 5px;
			margin-bottom: 10px;
			position: relative;
			cursor: pointer;
		}
		#abreZoom {
			position: absolute;
			top: 5px;
			right: 8px;
			font-size: 18px;
			z-index: 200;
		}
		img {
			width: auto;
			height: auto;
		}
	}
	.miniaturas {
		text-align: center;
	}
	.cep {
		ul {
			padding: 10px;
			border-width: 1px;
			border-style: solid;
			margin: 15px 0 0 0;
			li {
				font-size: 14px;
				margin-bottom: 10px;
				padding-bottom: 10px;
				border-bottom: 1px solid #DDD;
				&:last-child {
					margin-bottom: 0;
					padding-bottom: 0;
					border-bottom: 0;
				}
				>* {
					display: inline-block;
				}
				.valor {
					margin-right: 5%;
					min-width: 60px;
				}
				.prazo {
					margin-right: 5%;
					font-weight: bold;
					min-width: 80px;
				}
				span {
					font-size: 13px;
				}
				.aviso {
					margin: 10px 0 0;
					border: 1px solid #DDD;
					padding: 7px 10px;
					background: #efefef;
					font-size: 12px;
					line-height: 15px;
				}
			}
		}
		.aviso-disponibilidade {
			font-size: 11px;
			margin-top: 5px;
		}
		ul.loading {
			background-image: url('../img/loading.gif');
			background-repeat: no-repeat;
			background-position: center center;
			height: 20px;
		}
	}
	.produto-compartilhar {
		&:after {
			display: table;
			content: "";
			clear: both;
		}
	}
	.acoes-produto {
		margin-top: 10px;
		.preco-parcela {
			font-size: 13px;
		}
		.preco-parcela.cor-principal {
			font-size: 17px;
		}
		.preco-produto {
			.titulo {
				font-size: 20px;
			}
			.preco-venda {
				font-size: 13px;
			}
			.texto-indisponivel {
				display: inline-block;
				line-height: 30px;
				background-color: @background_color_12;
				padding: 10px 15px;
				border: 1px solid @white;
				box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
			}
		}
		.texto-indisponivel {
			i {
				margin-right: 7px;
			}
		}
		.destaque-parcela {
			>div {
				margin-bottom: 5px;
			}
		}
		.preco-produto.destaque-parcela {
			.titulo {
				font-size: 23px;
			}
			.preco-venda {
				font-size: 12px;
			}
			.preco-promocional {
				font-size: 15px;
				font-weight: normal;
			}
		}
		.comprar {
			float: right;
			text-align: right;
			span {
				display: block;
				span {
					text-align: right;
				}
			}
			.disponibilidade-produto {
				font-size: 11px;
				margin: 5px 0 0 0;
			}
			.hide {
				display: none;
			}
			.qtde-adicionar-carrinho {
				text-align: right;
				margin-bottom: 10px;
				.qtde-carrinho {
					width: 100%;
					padding: 5px 0;
					text-align: center;
					font-size: 15px;
					margin: 0;
				}
				.qtde-carrinho-title {
					position: absolute;
					cursor: text;
					line-height: 30px;
					color: @color-4;
					padding: 0 5px;
					font-size: 13px;
				}
			}
		}
		.disponibilidade-produto {
			text-align: center;
		}
	}
	.acoes-produto.preco-restrito {
		.preco-produto {
			.titulo {
				font-size: 25px;
			}
		}
		.botao-comprar {
			font-size: 17px;
		}
	}
	.acoes-produto.indisponivel {
		.preco-produto {
			float: none;
		}
	}
	.acoes-flutuante {
		background-color: @white;
		position: fixed;
		right: 0;
		bottom: 0;
		margin-bottom: 5%;
		padding: 20px;
		display: none;
		z-index: 999;
		box-shadow: 0 2px 10px rgba(0, 0, 0, 0.4);
		-webkit-backface-visibility: hidden;
		.close_float {
			background-color: @white;
			padding: 7px 12px;
			font-size: 14px;
			position: absolute;
			left: 0;
			top: 0;
			border-bottom-right-radius: 5px;
			-webkit-transition: .5s ease-in-out;
			-moz-transition: .5s ease-in-out;
			-o-transition: .5s ease-in-out;
			transition: .5s ease-in-out;
		}
		.preco-produto {
			div {
				>* {
					display: block;
				}
			}
			.desconto-a-vista {
				margin-top: 15px;
				display: block;
			}
			.preco-parcela {
				margin-top: 15px;
				display: block;
			}
			div&+div&+.desconto-a-vista {
				margin-top: 0;
			}
		}
		.acoes-produto {
			.preco-produto {
				.titulo {
					line-height: 20px;
				}
				float: none;
				max-width: 200px;
			}
			.comprar {
				float: none;
				margin-top: 15px;
				span {
					margin-left: 0;
				}
			}
			.avise-me {
				display: none;
			}
			.produto-mais-info {
				max-width: 300px;
			}
		}
		.image {
			text-align: center;
			img {
				max-width: 100%;
				max-height: 130px;
				width: auto;
				height: auto;
			}
		}
		.nome-produto {
			display: block;
			margin: 10px 0 15px;
			line-height: 20px;
			font-size: 16px;
			max-width: 200px;
		}
	}
	.acoes-flutuante.closed {
		box-shadow: none;
		.close_float {
			left: -38px;
			border-bottom-right-radius: 0;
			box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
		}
	}
}
.pagina-produto {
	.zm-viewer {
		cursor: pointer;
		.zm-description {
			display: none;
		}
	}
}
#formasEnvio {
	ul.loading {
		background-image: url('../img/loading.gif');
		background-repeat: no-repeat;
		background-position: center center;
		height: 20px;
	}
}
#formularioEndereco {
	ul.loading {
		background-image: url('../img/loading.gif');
		background-repeat: no-repeat;
		background-position: center center;
		height: 20px;
		position: absolute;
		width: 90%;
		display: block;
		height: auto;
	}
	position: relative;
	ul.borda-alpha {
		margin: 0;
		display: none;
		height: 0;
	}
	.formEndereco-conteiner.spinner {
		position: relative;
		&:before {
			content: 'Carregandoâ€¦';
			position: absolute;
			top: 38px;
			left: 140px;
			width: 16px;
			height: 16px;
			margin-top: -10px;
			margin-left: -10px;
		}
		&:not(:required) {
			&:before {
				content: '';
				border-radius: 50%;
				border: 2px solid rgba(0, 0, 0, .3);
				border-top-color: @border_top_color_1;
				animation: spin .6s linear infinite;
				-webkit-animation: spin .6s linear infinite;
			}
		}
	}
	#formasEnvio {
		clear: both;
	}
}
.produto-compartilhar {
	.lista-favoritos {
		line-height: 20px;
		font-size: 11px;
		font-weight: 600;
		display: inline-block;
		padding: 0 7px;
		border-radius: 2px;
		i {
			margin-right: 1px;
			width: auto;
			height: auto;
			line-height: normal;
			font-size: inherit;
		}
		&:hover {
			text-decoration: none;
			i {
				background: transparent;
				color: @color_4;
			}
		}
	}
	.fb-compartilhar {
		margin-left: 5px;
	}
}
.produto-video {
	margin: 15px 0;
	padding: 10px 0;
	display: table;
	border-width: 1px 0;
	border-style: solid;
	width: 100%;
	&:after {
		display: table;
		content: "";
		clear: both;
	}
	>* {
		display: inline-block;
	}
	>div {
		width: 85%;
		padding: 0 5px 0 0;
		display: table-cell;
		vertical-align: middle;
	}
	p {
		margin: 0;
		font-size: 13px;
	}
	a {
		text-align: center;
		white-space: nowrap;
		&:hover {
			text-decoration: none;
			* {
				color: @color-4;
			}
		}
	}
	i {
		display: block;
		font-size: 40px;
	}
	span {
		font-size: 11px;
	}
}
.atributos {
	div {
		ul {
			margin: 15px 0 0;
			li {
				float: left;
				margin-right: 10px;
				margin-bottom: 10px;
				line-height: normal;
				* {
					display: block;
				}
			}
		}
	}
	ul {
		li {
			a {
				box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
				margin: 0 2px 2px 0;
				position: relative;
				&:hover {
					border-width: 0 2px 2px 0;
					border-style: solid;
					margin: 0;
					border-color: @color-4;
				}
				i {
					font-size: 15px;
					position: absolute;
					right: -4px;
					top: -6px;
					color: @color_13;
				}
			}
			a.indisponivel {
				&:hover {
					border-color: @color-4;
				}
			}
		}
		li.active {
			a {
				border-width: 0 2px 2px 0;
				border-style: solid;
				margin: 0;
				border-color: @color-4;
			}
			a.indisponivel {
				border-color: @color-4;
			}
		}
		li.indisponivel {
			a {
				&:hover {
					border-color: @border_color_4;
				}
			}
		}
		li.indisponivel.active {
			border-color: @border_color_4;
		}
	}
	.wrapper-dropdown {
		position: relative;
		padding: 10px;
		margin: 10px 0;
		outline: 0;
		cursor: pointer;
		font-weight: bold;
		border-radius: 3px;
		border: 1px solid rgba(0, 0, 0, 0.1);
		&:after {
			content: "";
			width: 0;
			height: 0;
			position: absolute;
			right: 16px;
			top: 50%;
			margin-top: -6px;
			border-width: 6px 0 6px 6px;
			border-style: solid;
			border-color: @color-4;
		}
		.dropdown {
			position: absolute;
			top: 100%;
			left: 0;
			right: 0;
			font-weight: normal;
			display: none;
			pointer-events: none;
			margin: 0;
			z-index: 1;
			background: #e5e5e5;
			border: 1px solid rgba(0, 0, 0, 0.1);
			max-height: 200px;
			overflow: auto;
			li {
				float: none;
				margin: 0;
				a {
					padding: 0 5px;
					box-shadow: none;
					&:hover {
						border: 0;
						margin: 0 2px 2px 0;
					}
					span {
						text-align: left;
						padding: 0 5px;
					}
				}
				&:hover {
					opacity: .8;
					background: #EEE;
				}
				a.indisponivel {
					background-color: @background_color_26;
					color: @color-4;
					span {
						text-decoration: line-through;
						color: @color-4;
						font-weight: 200;
					}
					&:before {
						content: "(ESGOTADO)";
						float: right;
						color: @color_15;
						line-height: 30px;
					}
				}
			}
			li.active {
				opacity: .8;
				background: #EEE;
				a {
					border: 0;
					margin: 0 2px 2px 0;
				}
			}
		}
	}
	.wrapper-dropdown.show {
		.dropdown {
			display: block;
			pointer-events: auto;
			opacity: 1;
		}
		&:after {
			border-color: @color-4;
			border-width: 6px 6px 0 6px;
			margin-top: -3px;
		}
		opacity: 1;
	}
}
.atributo-comum {
	a {
		text-decoration: none;
		span {
			padding: 0 10px;
			min-width: 10px;
			min-height: 30px;
			line-height: 30px;
			text-align: center;
			font-weight: 700;
			color: @color-4;
		}
		&:hover {
			span {
				color: @color-4;
			}
		}
	}
	.active {
		a.indisponivel {
			span {
				color: @color-4;
			}
		}
		a {
			span {
				color: @color-4;
			}
		}
	}
	a.indisponivel {
		&:hover {
			span {
				color: @color-4;
			}
		}
		background-color: @background_color_25;
	}
}
.atributo-cor {
	a {
		padding: 2px;
		span {
			border-width: 0 0 25px 25px;
			border-style: solid;
		}
	}
	a.indisponivel {
		span {
			opacity: .3;
			filter: alpha(opacity=30);
		}
	}
}
#comprar-ajax-status {
	.sucesso {
		text-align: center;
		.head {
			font-size: 15px;
			font-weight: bold;
			line-height: 50px;
			margin-bottom: 10px;
		}
		.buttons {
			>* {
				display: inline-block;
				margin-top: 5px;
				float: right;
			}
			.continuar-comprando {
				margin-right: 5px;
				float: left;
			}
		}
		.buttons.btn-orcamento {
			min-width: 350px;
		}
		#carrinho-mini {
			margin-bottom: 10px;
			.table {
				margin: 0;
			}
			form {
				margin: 0;
			}
			.cupom-sucesso {
				margin: 0;
			}
			.atualizar-quantidade {
				font-size: 11px;
				padding: 3px 5px;
			}
			.scroll {
				max-height: 290px;
				overflow-x: auto;
			}
			.scroll.shadow {
				box-shadow: inset 0 15px 15px -10px #DDD, inset 0 -15px 15px -10px #DDD;
			}
			.tabela-carrinho {
				img {
					max-width: 65px;
					max-height: 65px;
				}
			}
		}
	}
	.erro {
		margin-top: 25px;
		.msg {
			font-size: 15px;
			line-height: 20px;
		}
	}
}
#descricao {
	li {
		list-style-type: inherit;
	}
	ul {
		list-style-type: inherit;
	}
}
.acoes-produto {
	&:after {
		display: table;
		content: "";
		clear: both;
	}
	.preco-produto {
		float: left;
		margin-bottom: 15px;
	}
	.texto-indisponivel {
		line-height: 30px;
		font-size: 14px;
	}
	.cep {
		div {
			margin: 0;
		}
	}
}
.cep {
	label {
		font-size: 12px;
		line-height: 30px;
		margin-bottom: 10px;
		float: left;
		font-weight: bold;
		margin-right: 10px;
	}
	form {
		margin: 0;
		.form-inline {
			>a {
				font-size: 11px;
				margin: 0 0 0 5px;
			}
		}
	}
	.input-append.input-prepend {
		input {
			border-radius: 4px 0 0 4px;
		}
	}
}
.parcelas-produto {
	.nav {
		margin: 0;
	}
	.nav-tabs {
		li {
			a {
				img {
					max-height: 17px;
					max-width: 200px;
				}
			}
		}
	}
	.tab-content {
		padding: 15px 10px;
		border-style: solid;
		border-width: 0 1px 1px;
		ul {
			margin: 0;
			width: 49%;
			float: left;
			text-align: center;
			li {
				span {
					text-align: left;
					display: inline-block;
				}
			}
		}
	}
	.accordion {
		margin: 0;
		border-width: 1px;
		border-style: solid;
		padding: 0 10px;
		.accordion-group {
			-webkit-border-radius: 0;
			-moz-border-radius: 0;
			border-radius: 0;
			margin: 0;
			border-width: 1px 0 0;
			&:first-child {
				border-top-width: 0;
			}
			.accordion-heading {
				.accordion-toggle {
					padding: 10px 0;
				}
				line-height: 21px;
				span.accordion-toggle {
					cursor: default;
				}
				img {
					height: auto;
					width: auto;
					max-height: 20px;
				}
				.text-parcelas {
					margin-right: 10px;
					font-size: 11px;
					span {
						font-size: 10px;
						margin-left: 2px;
					}
				}
			}
			.accordion-inner {
				padding: 10px 0;
			}
			.accordion-body {
				.accordion-inner {
					overflow: hidden;
					padding-left: 10px;
					ul {
						margin: 0;
						width: 49%;
						float: left;
						text-align: center;
						font-size: 12px;
						li {
							span {
								text-align: left;
								display: inline-block;
							}
						}
					}
				}
			}
		}
	}
}
.compre-junto {
	.interno {
		padding: 20px;
		box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
	}
	h4 {
		display: inline-block;
		color: @color-4;
		font-size: 16px;
		padding: 8px 12px;
		margin: 0 0 20px;
		background-color: @white;
		border-width: 1px;
		border-style: solid;
		border-radius: 4px;
		box-shadow: 0 0 5px rgba(0, 0, 0, 0.13);
	}
	.imagens {
		margin: 0;
		li {
			margin: 0 15px;
			float: left;
			&:first-child {
				margin-left: 0;
			}
			i {
				line-height: 110px;
				font-size: 24px;
			}
			a {
				display: block;
				width: 100px;
				height: 100px;
				padding: 5px;
				border: 1px solid rgba(0, 0, 0, 0.1);
			}
			img {
				max-width: 100%;
				max-height: 100%;
			}
		}
	}
	.comprar {
		padding: 15px;
		background-color: @background_color_12;
		overflow: hidden;
		.preco-produto {
			float: left;
		}
		.botao {
			float: right;
		}
		>span {
			font-size: 14px;
			margin-bottom: 15px;
			padding-bottom: 5px;
			border-bottom: 1px solid #ddd;
			clear: both;
			display: block;
		}
	}
}
.abas-custom {
	.nav-tabs {
		li {
			margin-right: 10px;
			a {
				border-bottom-color: @color-4;
				font-size: 16px;
				box-shadow: 0 0 5px rgba(0, 0, 0, 0.13);
				border-radius: 4px;
				&:hover {
					border-bottom-color: @color-4;
				}
			}
		}
		border: 0;
		li.active {
			a {
				border-bottom-color: @color-4;
			}
		}
	}
	.tab-content {
		padding: 20px;
		box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
	}
}
.fb-comments {
	width: 100% !important;
	iframe[style] {
		width: 100% !important;
	}
	span {
		width: 100% !important;
	}
	iframe {
		span[style] {
			width: 100% !important;
		}
	}
}
.fb-like-box {
	width: 100% !important;
	iframe[style] {
		width: 100% !important;
	}
	span {
		width: 100% !important;
	}
	iframe {
		span[style] {
			width: 100% !important;
		}
	}
}
.popup-sob-consulta {
	position: absolute;
	padding: 20px;
	border: 1px solid rgba(0, 0, 0, .1);
	background: @white;
	border-radius: 10px;
	box-shadow: 0 0 7px -2px rgba(0, 0, 0, .2);
	margin-top: 25px;
	z-index: 5;
	&:before {
		content: "";
		position: absolute;
		border-style: solid;
		border-color: @border_color_8;
		display: block;
		width: 0;
		top: -15px;
		left: 46px;
		border-width: 0 14px 15px;
	}
	&:after {
		content: "";
		position: absolute;
		border-style: solid;
		border-color: @border_color_9;
		display: block;
		width: 0;
		top: -13px;
		left: 47px;
		border-width: 0 13px 13px;
	}
	form {
		margin: 0;
	}
	.control-group {
		margin-bottom: 10px;
	}
	.control-label {
		width: 70px;
	}
	.controls {
		margin-left: 80px;
		.botao {
			margin-left: 10px;
		}
	}
	.consulte-sucesso {
		.consulte-sucesso-icon {
			color: @color_17;
			font-size: 60px;
			line-height: 50px;
			margin-bottom: 5px;
		}
		.consulte-sucesso-tit {
			color: @color_17;
			font-size: 20px;
			font-weight: lighter;
		}
		.consulte-sucesso-descr {
			color: @color-4;
			margin: 10px 15px 20px;
			line-height: 15px;
		}
	}
}
.pagina-categoria {
	.listagem {
		h1 {
			font-size: 17.5px;
			margin: 10px 0;
		}
	}
}
.ordenar-listagem {
	border-style: solid;
	label {
		font-size: 12px;
		float: left;
		padding: 4px 12px;
		border: 1px solid rgba(0, 0, 0, 0.2);
		border-radius: 4px 0 0 4px;
		background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.2));
		margin: 0;
	}
	.span6 {
		>* {
			float: left;
		}
		div {
			>strong {
				position: relative;
				top: 2px;
			}
		}
	}
	.input-append {
		margin: 0 0 0 10px;
		padding-left: 10px;
		border-left: 1px solid rgba(0, 0, 0, 0.12);
		&:first-child {
			border: 0;
			margin: 0;
			padding: 0;
		}
	}
	.botao-direcao {
		margin-left: 10px;
	}
	.pagination {
		margin: 0;
		float: right;
	}
	.quantidade-produto {
		display: block;
		line-height: 30px;
	}
	.dropdown-menu {
		left: 0;
		right: auto;
	}
	.filtro-mobile {
		float: right;
		margin-bottom: 10px;
		.btn {
			line-height: 34px;
		}
	}
	.filtro-mobile-itens {
		clear: both;
		float: none;
		padding-top: 5px;
		display: none;
		.filtro-coluna {
			margin-bottom: 10px;
		}
		.filtro.lista {
			ul {
				margin: 0;
				border: 0;
				li {
					margin: 0;
					border: 0;
				}
			}
			label {
				margin: 5px 5px 0 0;
				border-radius: 0;
			}
		}
	}
	.filtro-mobile-itens.active {
		display: block;
	}
}
.ordenar-listagem.topo {
	padding-bottom: 10px;
	border-width: 0 0 1px;
}
.ordenar-listagem.rodape {
	padding-top: 10px;
	margin-top: 10px;
	border-width: 1px 0 0;
}
.dropdown-menu {
	>li {
		>a {
			font-size: 12px;
			i {
				margin-right: 10px;
			}
			&:hover {
				background-color: @color-4;
			}
		}
	}
}
.filtro {
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
	outline: 1px solid rgba(0, 0, 0, 0.05);
	padding: 20px;
	outline: 0;
	>div {
		>* {
			margin: 0 0 15px;
		}
		span {
			display: inline-block;
		}
	}
	h4 {
		margin-top: 0;
		overflow: hidden;
		padding-bottom: 10px;
		border-bottom: 1px solid rgba(0, 0, 0, 0.1);
		.limpar {
			float: right;
			font-size: 11px;
			font-family: @font-padrao;
			text-transform: none;
			i {
				margin-right: 5px;
			}
		}
	}
	.filtro-busca {
		display: block;
		position: relative;
		height: 30px;
		input {
			width: 90%;
		}
		.btn-group {
			position: absolute;
			top: 0;
			right: 0;
			z-index: 5;
		}
	}
}
.filtro.atributos {
	div {
		ul {
			margin: 0;
			li {
				margin: 5px;
			}
		}
	}
}
.filtro.lista {
	ul {
		max-height: 163px;
		overflow: auto;
		border: 1px solid rgba(0, 0, 0, 0.1);
		li {
			border-width: 1px 0 0;
			border-style: solid;
			border-color: @border_color_10;
			&:first-child {
				border: 0;
			}
			label {
				font-size: 12px;
				padding: 2px 10px;
				line-height: 25px;
				margin: 0;
				display: block;
				vertical-align: middle;
				input {
					margin: -2px 5px 0 0;
				}
				&:hover {
					color: @white;
					background-color: @color-4;
				}
			}
		}
		li.active {
			label {
				color: @white;
			}
		}
	}
}
.filtro-preco {
	input {
		border: 0;
		background: 0;
		box-shadow: none;
		padding: 0;
	}
}
.cadastro {
	legend {
		line-height: normal;
		padding-bottom: 10px;
		margin-bottom: 20px;
		font-size: 16px;
	}
	label {
		font-size: 13px;
	}
	.dados-acesso {
		label {
			font-size: 15px;
			font-weight: 600;
		}
	}
	label.radio {
		line-height: 20px;
		display: inline-block;
		margin: 0 20px 0 0;
	}
	input[type="text"] {
		margin: 0;
		font-size: 13px;
	}
	input[type="password"] {
		margin: 0;
		font-size: 13px;
	}
	select {
		margin: 0;
		font-size: 13px;
	}
	form {
		>div {
			margin-bottom: 20px;
		}
	}
	.ie-isento {
		margin: 9px 0 0;
	}
	.tipo-cadastro {
		ul {
			margin: 0;
		}
		li {
			margin-left: 10px;
			float: left;
		}
		.error {
			label {
				color: @color_2;
			}
		}
		label {
			min-height: 20px;
			padding-left: 20px;
			input {
				float: left;
				margin-left: -20px;
			}
		}
	}
}
.cabecalho-interno {
	margin-bottom: 10px;
	.titulo {
		font-size: 22px;
		small {
			font-size: 19px;
			text-transform: none;
			font-weight: 300;
		}
	}
}
.cadastro-logar {
	.botao {
		padding: 5px 14px 4px;
		margin-left: 10px;
	}
	.form-horizontal {
		.control-label {
			width: 50px;
			text-align: left;
		}
		.controls {
			margin-left: 60px;
		}
	}
	.control-group {
		margin: 0 0 8px;
	}
}
.recuperar-senha {
	margin-left: 65px;
	i {
		margin-right: 5px;
	}
}
.tipo-cadastro {
	.caixa-cadastro {
		>div {
			* {
				display: inline-block;
			}
		}
	}
}
.dados-acesso {
	background-color: @background_color_12;
}
.dados-pessoais {
	label {
		span {
			min-width: 135px;
			padding-right: 10px;
			text-align: right;
		}
		a {
			font-size: 11px;
			margin: 0 0 0 15px;
		}
	}
}
.acao-editar {
	text-align: right;
	>div {
		* {
			margin-left: 8px;
		}
	}
	.selo-ssl {
		position: absolute;
		img {
			margin-left: 0;
			width: auto;
			height: auto;
		}
	}
}
#formas-pagamento-wrapper {
	.selo-ssl {
		text-align: right;
		position: static;
		img {
			max-width: 130px;
		}
	}
}
.conta-menu {
	.titulo {
		margin: 0 0 10px;
		padding: 0 5px 15px;
		border-width: 0 0 1px;
		border-style: solid;
		display: block;
		font-size: 17.5px;
	}
	.menu-simples {
		margin: 0;
	}
	.nome-usuario {
		overflow: hidden;
		width: 100%;
		white-space: nowrap;
	}
	i {
		width: 20px;
	}
}
.conta {
	fieldset {
		margin: 0 0 10px;
	}
	legend {
		line-height: 35px;
		border: 0;
		margin: 0 0 5px;
		font-size: 15px;
		a {
			font-size: 12px;
		}
	}
	h4 {
		margin: 20px 0;
	}
	.secao-principal {
		margin-bottom: 20px;
	}
}
.abas-conta {
	margin: 0 0 -1px;
	position: relative;
	z-index: 10;
	li {
		float: left;
		margin-right: 10px;
		a {
			font-size: 16px;
			display: block;
			padding: 10px 15px;
			border-width: 1px 1px 0;
			border-style: solid;
			border-radius: 4px 4px 0 0;
			box-shadow: 0 -1px 4px rgba(0, 0, 0, 0.1);
			background-color: @background_color_17;
			&:hover {
				text-decoration: none;
			}
		}
	}
	li.active {
		a {
			background-color: @white;
		}
	}
	i {
		width: 20px;
	}
}
.abas-conteudo {
	padding: 20px;
	border-width: 1px;
	border-style: solid;
	box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
}
.pagina-pagina {
	.conteudo {
		li {
			list-style: disc;
		}
	}
}
.caixa-info {
	padding: 10px 15px;
	margin: 0 0 10px;
	background-color: @background_color_14;
	border: 1px solid @white;
	box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
}
.caixa-dados {
	legend {
		line-height: 35px;
		border: 0;
		margin: 0 0 5px;
		font-size: 15px;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	ul {
		li {
			margin: 10px 0 0;
			&:first-child {
				margin: 0;
			}
			b&+span&+b {
				margin-left: 15px;
			}
		}
	}
	.caixa-sombreada {
		padding: 0;
	}
	h3 {
		border-width: 0 0 1px;
		border-style: solid;
		margin-top: -5px;
		font-weight: 400;
		font-size: 22px;
	}
	padding: 20px;
	margin-top: 20px;
	border-width: 1px;
	border-style: dashed;
	&:first-child {
		margin: 0;
	}
	.enderecos-adicionais {
		margin-top: 40px;
	}
}
.tabela-pedidos {
	th {
		background-color: @background_color_26;
		text-align: center;
	}
	td {
		text-align: center;
	}
}
.meus-favoritos {
	table {
		img {
			max-width: 60px;
			max-height: 60px;
		}
		i {
			font-size: 18px;
		}
		td {
			text-align: center;
			padding: 6px;
		}
		th {
			text-align: center;
		}
		.text-left {
			text-align: left;
		}
	}
	h3 {
		border: 0;
	}
	li {
		input {
			margin: 0;
		}
	}
}
.buscar-pedidos {
	margin: 20px 0 10px;
	padding-bottom: 20px;
	border-width: 0 0 1px;
	border-style: solid;
	input {
		margin: 0;
	}
	select {
		margin: 0;
	}
	label {
		display: inline;
		line-height: 30px;
		span {
			font-size: 12px;
			margin-right: 5px;
		}
	}
	label&+label {
		margin-left: 10px;
	}
	.botao {
		margin: -1px 0 0 10px;
		padding: 4px 14px;
	}
}
#mostrarAcompanhamento {
	margin-top: 10px;
	.caixa-info {
		padding: 0;
		margin: 0;
		border: 0;
	}
	td {
		border-color: @color-4;
	}
	.sroDtEvent {
		font-size: 10px;
		label {
			font-size: 10px;
			white-space: nowrap;
		}
	}
}
.menu-simples {
	margin: 0 0 0 10px;
	li {
		margin: 0 0 2px;
		a {
			display: block;
			padding: 3px 5px;
			&:hover {
				color: @white;
				text-decoration: none;
				background-color: @color-4;
				* {
					color: @white;
					text-decoration: none;
				}
			}
		}
	}
	li.divisor {
		height: 1px;
		margin: 5px 0;
		border-width: 0 0 1px;
		border-style: solid;
	}
	li.active {
		a {
			* {
				color: @white;
				text-decoration: none;
			}
			color: @white;
			text-decoration: none;
			background-color: @color-4;
		}
	}
}
.finalizar-compra {
	margin-bottom: 20px;
	.caixa-sombreada {
		padding: 0;
	}
}
.tabela-carrinho {
	* {
		text-align: center;
		vertical-align: middle;
	}
	th {
		&:first-child {
			* {
				text-align: left;
			}
		}
		border-width: 1px;
		border-style: solid;
		border-collapse: collapse;
		padding: 10px;
	}
	td {
		border-width: 1px;
		border-style: solid;
		border-collapse: collapse;
		padding: 10px;
	}
	form {
		margin: 0;
	}
	.bg-dark {
		background-color: @background_color_1;
	}
	.produto-info {
		text-align: left;
		* {
			text-align: left;
		}
		ul {
			margin: 0;
			li {
				margin: 0;
				* {
					vertical-align: initial;
				}
				span {
					strong {
						word-break: break-word;
					}
				}
			}
		}
	}
	.tag-carrinho {
		font-size: 10px;
		font-weight: normal;
		padding: 0 6px 1px;
		margin-left: 3px;
	}
	.text-left {
		text-align: left;
	}
	label {
		font-size: 13px;
	}
	.formas-envio {
		label {
			text-align: left;
			margin: 3px 0;
			>* {
				display: inline-block;
			}
		}
		input[type="radio"] {
			margin-left: 0;
			vertical-align: -4px;
			float: none;
			margin-right: 7px;
		}
		.prazo {
			margin-right: 3px;
		}
		.valor {
			margin-right: 3px;
		}
		.radio {
			padding-left: 0;
		}
		b {
			white-space: nowrap;
		}
		span {
			white-space: nowrap;
		}
	}
	#formCalcularFrete {
		p.envio-aviso {
			text-align: left;
			margin: 10px 20px 0 0;
			line-height: 15px;
		}
	}
	ul {
		margin: 0;
	}
	.atualizar-quantidade {
		margin-top: 5px;
		display: none;
	}
	.quantidade {
		a {
			font-size: 14px;
			&:hover {
				text-decoration: none;
			}
		}
		input[type="text"] {
			width: 40px;
			margin: 0 6px;
		}
	}
	.excluir {
		a {
			font-size: 14px;
			&:hover {
				text-decoration: none;
			}
		}
	}
	.preco-produto {
		.titulo {
			display: block;
		}
		.preco-promocional {
			white-space: nowrap;
		}
	}
	img {
		max-width: 90px;
		max-height: 90px;
	}
	.sem-borda {
		border-width: 1px 0;
	}
	.form-horizontal {
		margin: 10px 0;
		.control-label {
			width: 160px;
			padding-top: 3px;
		}
		.controls {
			margin-left: 170px;
			i {
				margin: 0 5px;
			}
		}
	}
	.control-group {
		margin: 0;
	}
	.possui-cupom {
		background-color: @background_color_27;
	}
	.cupom-sucesso {
		text-align: right;
		margin: 10px 0 10px;
		.cupom-codigo {
			padding: 5px;
			background-color: @background_color_28;
			border: 1px dashed #83bcf5;
			color: @color_19;
			font-size: 14px;
		}
		.remover-cupom {
			padding: 5px;
			margin-left: 5px;
		}
	}
	.cupom-valor {
		text-align: right;
		#cupom_desconto {
			font-size: 16px;
		}
	}
	.desconto-tr {
		.text-right {
			line-height: 15px;
		}
		.texto-aplicar-total {
			margin-top: -5px;
		}
	}
}
.subtotal {
	text-align: right;
	vertical-align: baseline;
	strong {
		font-size: 16px;
		margin: 0 8px;
		white-space: nowrap;
	}
}
.total {
	text-align: right;
	vertical-align: baseline;
	margin: 10px 0;
	strong {
		font-size: 22px;
		margin: 0 10px;
		vertical-align: baseline;
	}
}
.descontos {
	text-align: right;
	vertical-align: baseline;
}
.total&+.valores-descontos {
	.descontos {
		&:first-child {
			margin-top: -5px;
		}
	}
}
.valor-loading {
	position: relative;
	&:before {
		content: "";
		display: block;
		position: absolute;
		top: 0;
		bottom: 0;
		right: 0;
		left: 0;
		background: rgba(255, 255, 255, .9);
	}
	&:after {
		content: "";
		display: block;
		position: absolute;
		-webkit-animation: spin .75s linear infinite;
		-moz-animation: spin .75s linear infinite;
		animation: spin .75s linear infinite;
		height: 10px;
		width: 10px;
		border: 5px solid #888;
		border-right-color: @border_right_color_1;
		border-radius: 50%;
		display: inline-block;
		top: 50%;
		left: 50%;
		margin: -10px 0 0 -10px;
	}
}
.bg-dark {
	.valor-loading {
		&:before {
			background: rgba(250, 250, 250, .9);
		}
	}
}
.formas {
	.accordion-group {
		&:hover {
			.valor-loading {
				&:before {
					background: rgba(250, 250, 250, .9);
				}
			}
			background-color: @background_color_14;
		}
		margin-bottom: 4px;
	}
	.accordion-group.active {
		.valor-loading {
			&:before {
				background: rgba(250, 250, 250, .9);
			}
		}
		background-color: @background_color_14;
	}
	ul {
		margin: 0 0 10px;
		li {
			line-height: normal;
			height: 22px;
		}
	}
	.bandeiras-pagamento {
		margin-bottom: 0;
		li {
			margin-bottom: 10px;
		}
	}
	.forma-pagamento-parcela {
		display: block;
		margin: -5px 0 0;
		font-size: 13px;
	}
	.payment-country-origin {
		padding: 0 0 15px;
		img {
			display: inline-block;
			vertical-align: -4px;
			margin-left: 3px;
			width: auto;
			height: auto;
			max-width: 18px;
		}
	}
	.accordion-heading {
		margin: 0;
		min-height: 38px;
		line-height: 38px;
		cursor: pointer;
		.radio-conteiner {
			height: 38px;
			padding: 0 10px;
			float: left;
		}
		.forma-conteiner {
			display: block;
			margin-left: 30px;
			padding: 0 15px;
			position: relative;
			img {
				margin: auto;
				max-height: 30px;
				margin-top: -2px;
			}
			.cor-secundaria {
				white-space: nowrap;
				float: right;
			}
			&:after {
				display: table;
				content: "";
				clear: both;
			}
			.helper {
				display: inline-block;
				height: 100%;
				vertical-align: middle;
				margin-left: -2px;
				float: left;
			}
			.img-content {
				float: left;
			}
			.envio-nome {
				float: left;
				float: none;
				display: inline-block;
				line-height: 15px;
			}
			.text-content {
				float: left;
				.cor-secundaria {
					float: none;
				}
			}
			.envio-prazo-entrega {
				display: inline-block;
				min-width: 50px;
			}
			.envio-preco {
				display: inline-block;
				min-width: 50px;
				margin-right: 13%;
			}
		}
		.forma-conteiner.with-discount {
			img {
				max-width: calc(100% - 90px);
			}
		}
		.accordion-toggle {
			padding: 0;
		}
	}
	.accordion-inner {
		.text-right {
			h5 {
				display: inline-block;
			}
		}
		p {
			margin: 0;
		}
	}
	.accordion-group.disabled {
		opacity: .8;
		position: relative;
		&:before {
			content: "";
			position: absolute;
			top: 0;
			bottom: 0;
			left: 0;
			right: 0;
			z-index: 1;
			background: rgba(255, 255, 255, .5);
			text-align: center;
			font-weight: bold;
			line-height: 38px;
			border-radius: 5px;
		}
		&:hover {
			&:before {
				content: "IndisponÃ­vel nesta forma de envio";
				background: @white;
			}
		}
	}
	.accordion-group.disabled.cnpj {
		&:hover {
			&:before {
				content: "IndisponÃ­vel para pessoa jurÃ­dica";
				background: @white;
			}
		}
	}
}
.atributo-cor-carrinho {
	display: inline-block;
	vertical-align: middle !important;
	>span {
		float: left;
		width: 15px;
		height: 15px;
		border: 1px solid #EEE;
	}
}
.campos-pedido {
	legend {
		font-size: 15px;
		margin: 0 0 15px;
		line-height: 15px;
		padding-bottom: 15px;
	}
	label {
		font-size: 12px;
	}
	input[type="text"] {
		margin: 0;
	}
	input[type="password"] {
		margin: 0;
	}
	select {
		margin: 0;
	}
	form {
		margin: 0;
	}
	.divisor {
		padding: 10px 0;
		margin: 10px 0;
		border-width: 1px 0;
		border-style: solid;
	}
	.tipo-cadastro {
		li {
			min-height: 0;
			i {
				font-size: 14px;
				position: relative;
				top: 1px;
			}
			.icon-check {
				display: none;
			}
			a {
				text-decoration: none;
				&:hover {
					text-decoration: none;
				}
			}
		}
		li.active {
			.icon-check-empty {
				display: none;
			}
			.icon-check {
				display: inline-block;
			}
		}
	}
	legend&+.control-group {
		margin: 0 0 10px;
	}
	.cadastrar-newsletter {
		margin: 10px 0 5px;
	}
	.caixa-sombreada {
		margin-bottom: 20px;
	}
	.acao-editar {
		button {
			&:first-child {
				margin-bottom: 20px;
			}
		}
	}
	.nowrap {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		padding-right: 5px;
	}
	.control-group {
		.errorlist {
			display: none;
		}
	}
	.control-group.erro {
		.errorlist {
			display: block;
			margin: 0 0 10px;
			color: @color_2;
		}
	}
}

	.institucional {
		min-height: 215px;
        padding: 0 0 20px;
        background-color: @color-3;


		ul {
			margin: 0;
		}
		ul.split {
			-webkit-column-count: 2;
			-moz-column-count: 2;
			column-count: 2;
		}
		.lista-redes {
			text-align: center;
			ul {
				display: inline-block;
			}
		}
	}
	.pagamento-selos {
        padding: 0 0 20px;
        background-color: @color-3;
	}
	>div {
		&:last-child {
			.conteiner {
				padding: 10px 20px 5px;
			}
		}
	}
	.caixa-facebook {
		text-align: center;
		margin: 0 0 15px;
		background-color: @white;
		box-shadow: 0 0 4px rgba(0, 0, 0, 0.4);
	}
	img[src='https://cdn.awsli.com.br/production/static/whitelabel/lojaintegrada/img/logo-rodape-loja-pro.png'] {
		display: inline !important;
	}
}
.institucional {
	.redes-sociais {
		.titulo {
			color: @color-4;
		}
	}
}
.links-rodape {
	ul {
		li {
			list-style-position: none;
            line-height: 25px;
            
            &:before {
                content: "\f069";
                padding-right: 10px;
                font-family: @font-awesome;
            }
		}
	}
}
.radio-conteiner {
	display: inline-block;
	padding: 5px 10px;
	background-color: @background_color_29;
	input {
		margin: 0;
	}
}
.active {
	.radio-conteiner {
		background-color: @white;
	}
}
.formas.envio&+.warning-text {
	font-size: 9px;
	margin: -5px 0;
}
.formas.envio {
	.accordion-heading {
		.forma-conteiner {
			.envio-nome {
				text-align: left;
				white-space: normal;
				vertical-align: 0;
			}
			.text-content {
				margin-right: 8%;
			}
		}
	}
	.accordion-group {
		.forma-aviso {
			padding: 10px;
			border-top-style: solid;
			border-top-width: 1px;
		}
	}
	.accordion-group.forma-envio-ativo {
		.forma-aviso {
			display: block;
		}
	}
}
.tema-escuro {
	.formas {
		.accordion-heading {
			.forma-conteiner {
				img {
					background-color: @white;
					padding: 5px;
					border-radius: 3px;
					box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
				}
			}
		}
	}
	.nav-tabs {
		li.active {
			a {
				border-color: @color-4;
			}
		}
	}
}
#escolha-cartao {
	#bandeiras-manual {
		.bandeiras-pagamento {
			li {
				cursor: pointer;
				opacity: .5;
				margin-bottom: 5px;
				&:hover {
					opacity: 1;
				}
			}
			li.active {
				opacity: 1;
			}
		}
	}
	.cartao_dados_titular {
		margin-top: 10px;
	}
	.group_cartao_dados_titular {
		margin-bottom: 0;
	}
}
#formularioEndereco.loading {
	position: relative;
	min-height: 50px;
	&:before {
		content: "";
		display: block;
		position: absolute;
		top: 0;
		bottom: 0;
		right: 0;
		left: 0;
		background: rgba(0, 0, 0, .05);
	}
	&:after {
		content: "";
		display: block;
		position: absolute;
		-webkit-animation: spin .75s linear infinite;
		-moz-animation: spin .75s linear infinite;
		animation: spin .75s linear infinite;
		height: 10px;
		width: 10px;
		border: 5px solid #888;
		border-right-color: @border_right_color_1;
		border-radius: 50%;
		display: inline-block;
		top: 50%;
		left: 50%;
		margin: -10px 0 0 -10px;
	}
}
.resumo-compra.caixa-sombreada {
	padding: 0;
}
.resumo-compra {
	.preco-produto {
		.titulo {
			font-size: 13px;
			white-space: nowrap;
			font-weight: normal;
			margin: 0;
		}
	}
	.subtotal {
		strong {
			font-size: 13px;
			white-space: nowrap;
			font-weight: normal;
			margin: 0;
		}
	}
	.frete-preco {
		strong {
			font-size: 13px;
			white-space: nowrap;
			font-weight: normal;
			margin: 0;
		}
	}
	.desconto-preco {
		strong {
			font-size: 13px;
			white-space: nowrap;
			font-weight: normal;
			margin: 0;
		}
	}
	.total {
		margin: 0;
		strong {
			font-size: 18px;
			margin: 0;
		}
	}
	.tabela-carrinho {
		margin: 0 0 20px;
		td {
			border-width: 1px 0 0;
			padding: 5px 10px;
			height: 20px;
		}
		img {
			max-height: 60px;
			max-width: 60px;
		}
		.padding-preco {
			text-align: left;
			padding: 10px 0;
			>div {
				padding-left: 15%;
			}
			* {
				text-align: left;
			}
		}
		.text-right {
			text-align: right;
			padding: 5px 0;
		}
	}
	a {
		display: inline-block;
		max-height: 65px;
		line-height: normal;
		overflow: hidden;
		text-align: left;
	}
}
.identificacao {
	margin: 0;
	hr.sem-margem {
		display: none;
	}
	.identificacao-inner {
		margin: 0;
		padding: 10px;
		form {
			margin: 0;
		}
	}
	.identificacao-title {
		margin: 0;
		font-size: 21px;
		line-height: 25px;
		text-align: center;
		margin: 0 0 20px;
	}
	.control-group {
		margin: 0 auto;
		max-width: 490px;
		position: relative;
		input {
			width: 94%;
			padding: 15px 3%;
			font-size: 18px;
			box-shadow: inset 1px 1px 7px #e7e7e7;
			&::-webkit-input-placeholder {
				color: @color-4;
			}
			&::-moz-placeholder {
				color: @color-4;
			}
			&:-ms-input-placeholder {
				color: @color-4;
			}
			&:-moz-placeholder {
				color: @color-4;
			}
		}
		.botao.principal {
			padding: 10px 10px 13px;
			font-size: 20px;
			max-width: 100px;
			min-width: 100px;
			float: right;
			line-height: 27px;
		}
		.botao.principal.disabled {
			i {
				margin: 0;
			}
		}
		.submit-email.botao.principal {
			position: absolute;
			top: 0;
			right: 0;
			float: none;
			max-width: 95px;
			min-width: 95px;
		}
		.esqueci-senha {
			clear: both;
			display: inline-block;
			margin-top: 15px;
			margin-right: 10px;
		}
	}
	.email-box {
		margin-right: 125px;
		.botao.principal {
			padding: 10px 10px 13px;
		}
	}
	.senha-box {
		margin-right: 115px;
	}
	.login-data {
		margin-top: 20px;
	}
}
.identificacao&+.row-fluid {
	.caixa-sombreada {
		margin-bottom: 0;
	}
	.resumo-compra {
		.tabela-carrinho {
			margin-bottom: 0;
		}
	}
}
.fazer-login {
	.well {
		margin-bottom: 0;
	}
}
#formularioCheckout {
	.row-fluid.hide {
		margin-top: 20px;
	}
}
.fancybox-inner {
	-webkit-transition: top .7s, height .7s;
	transition: top .7s, height .7s;
}
.fancybox-wrap {
	-webkit-transition: top .7s, height .7s;
	transition: top .7s, height .7s;
}
.fancybox-wrap.fancybox-opened {
	z-index: 100001;
}
#listaEndereco.lista-endereco.accordion {
	margin-bottom: 0;
	.titulo {
		margin-top: 15px;
	}
}
.pedido-finalizado {
	h1 {
		small {
			display: block;
		}
	}
	.cabecalho-interno {
		padding: 10px 0;
		border: 0;
		margin-bottom: 20px;
		.titulo {
			font-size: 28px;
		}
		.botoes-pedido {
			* {
				margin-right: 10px;
			}
			.alert-message {
				margin-top: 0;
			}
		}
		ul {
			margin: 0 10px 0 0;
		}
		.status-pagamento {
			h3 {
				font-weight: 600;
				font-size: 20px;
				line-height: 45px;
			}
			.lead {
				margin: 15px 0 10px;
				font-size: 17px;
				line-height: 20px;
			}
			.loading-spinner {
				float: right;
				line-height: 50px;
			}
		}
	}
	.numero-pedido {
		font-size: 50px;
		* {
			vertical-align: middle;
			line-height: 35px;
		}
	}
	fieldset {
		img {
			max-height: 25px;
		}
	}
	#iframe-boleto-container {
		margin-bottom: 25px;
	}
}
.direitos-reservados {
	background-color: @white;
	border-top: 1px solid #ddd;
	position: relative;
	z-index: 10;
	font-size: 11px;
	p {
		margin: 6px 0 0;
	}
	.cert-seo {
		float: right;
		margin-right: 20px;
	}
	.plataforma {
		display: block;
		margin: 3px 0 0;
		text-align: center;
		span {
			margin-right: 10px;
			text-transform: uppercase;
		}
	}
}
#barraTopo {
	display: none;
	background-color: @white;
	box-shadow: 0 0 7px rgba(0, 0, 0, 0.5);
	height: 40px;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	z-index: 99999;
	.conteiner {
		padding: 5px 20px;
		background: 0;
		box-shadow: none;
	}
	.carrinho {
		>a {
			i {
				height: 28px;
				width: 28px;
				line-height: 28px;
				font-size: 19px;
			}
			strong {
				font-size: 20px;
				line-height: 28px;
				margin: 0 5%;
			}
		}
	}
	.carrinho.vazio {
		>a {
			span {
				margin-left: 38px;
				line-height: 30px;
			}
		}
	}
	.carrinho-interno {
		top: 29px;
	}
	.busca {
		padding: 0;
		background: 0;
		border: 0;
		.botao-busca {
			top: 0;
			right: 0;
		}
	}
	h4 {
		margin: 0;
		line-height: 30px;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	.canais-contato {
		ul {
			margin: 0;
			li {
				line-height: 30px;
				float: left;
				font-size: 11px;
				margin-left: 5px;
				padding-left: 5px;
			}
		}
	}
}
#carregando {
	padding: 20px;
	text-align: center;
	position: fixed;
	top: 50%;
	left: 50%;
	z-index: 1060;
	overflow: auto;
	width: 560px;
	margin: -100px 0 0 -280px;
	background-color: @white;
	-webkit-border-radius: 6px;
	-moz-border-radius: 6px;
	border-radius: 6px;
	-webkit-box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);
	-moz-box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);
	box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);
	-webkit-background-clip: padding-box;
	-moz-background-clip: padding-box;
	background-clip: padding-box;
	.carregando-img {
		width: 20px;
		height: 30px;
		display: inline-block;
		background: url('../img/ajax-loader.gif') no-repeat center center;
	}
	.carregando-texto {
		display: block;
		font-size: 16px;
		margin-bottom: 5px;
		font-weight: bold;
	}
}
.modal {
	label {
		font-size: 12px;
	}
	form {
		margin: 0;
	}
}
.modal-header {
	border: 0;
	.titulo {
		font-size: 24.5px;
		line-height: 30px;
		margin: 0;
	}
}
.modal-footer {
	.botao&+.botao {
		margin-left: 10px;
	}
}
#modalContato {
	width: 800px;
	margin-left: -400px;
	top: 8%;
	.control-group {
		margin-bottom: 5px;
		margin-bottom: 10px;
		.botao.principal.pull-right {
			margin-right: 40px;
		}
		.botao.principal.pull-right&+.botao {
			margin-right: 10px;
		}
	}
	table {
		margin: 0;
	}
	.modal-body {
		max-height: 600px;
	}
	.form-horizontal {
		.control-label {
			width: 90px;
		}
		.controls {
			margin-left: 110px;
		}
	}
	.g-recaptcha {
		margin-left: 30px;
	}
	textarea {
		height: 60px;
	}
	.contato-loading {
		font-size: 14px;
		padding: 40px 10px;
		text-align: center;
		.icon-refresh {
			font-size: 35px;
		}
	}
}
.form-horizontal {
	.control-group {
		&:last-child {
			margin-bottom: 0;
		}
	}
}
#modalSolicitarOrcamento {
	width: 800px;
	margin-left: -400px;
	.control-label {
		width: 80px;
	}
	.controls {
		margin-left: 100px;
	}
	textarea {
		height: 80px;
	}
	.form-horizontal {
		.control-group {
			margin-bottom: 10px;
		}
	}
}
#modalVideo {
	width: 600px;
	.modal-body {
		text-align: center;
		min-height: 315px;
	}
}
.elastislide-carousel {
	ul {
		li {
			a {
				width: 64px;
				height: 64px;
				display: block;
				overflow: hidden;
				position: relative;
				z-index: 20;
				background-color: @white;
				margin: 2px;
				span {
					width: inherit;
					height: inherit;
					position: relative;
					display: block;
				}
			}
		}
		li.active {
			a {
				border-color: @color-4;
			}
		}
	}
}
#carouselImagem {
	.elastislide-carousel {
		ul {
			li {
				a {
					span {
						img {
							width: auto;
							height: auto;
							position: absolute;
							top: 0;
							bottom: 0;
							left: 0;
							right: 0;
							margin: auto;
							max-width: 100%;
							max-height: 100%;
						}
					}
				}
			}
		}
	}
	margin-bottom: 15px;
	border: 0;
	box-shadow: none;
	border-radius: 0;
	white-space: nowrap;
	.flex-viewport {
		margin: 0 30px;
	}
	.flex-direction-nav {
		.flex-disabled {
			display: none;
		}
		.flex-next {
			right: 0;
			opacity: .6;
			&:hover {
				opacity: 1;
			}
		}
		.flex-prev {
			left: 0;
			opacity: .6;
			&:hover {
				opacity: 1;
			}
		}
		a.flex-prev {
			background: url(../img/nav-thumbs.png) 0 0;
		}
		a.flex-next {
			background: url(../img/nav-thumbs.png) -90px 0;
		}
	}
	.flexslider {
		&:hover {
			.flex-direction-nav {
				.flex-next {
					right: 0;
					opacity: .6;
				}
				.flex-prev {
					left: 0;
					opacity: .6;
				}
			}
		}
	}
}
.flex-centered {
	.slides {
		width: 100% !important;
		text-align: center;
		li {
			display: inline-block !important;
			*display: inline !important;
			float: none !important;
		}
	}
}
.thumbs-vertical {
	width: 70px;
	float: left;
	margin-right: 20px;
	#carouselImagem {
		padding-bottom: 40px;
		.flex-viewport {
			margin: 0;
			height: auto !important;
			max-height: 385px;
			.slides {
				position: relative !important;
			}
		}
		.flex-direction-nav {
			a.flex-next {
				background-position: -90px -30px;
			}
			a.flex-prev {
				background-position: 0 -30px;
			}
			.flex-disabled {
				display: block;
				opacity: .3;
			}
			.flex-next {
				right: 5px;
			}
		}
		.flexslider {
			&:hover {
				.flex-direction-nav {
					.flex-next {
						right: 5px;
					}
				}
			}
		}
	}
	.elastislide-carousel {
		ul {
			li {
				height: 65px;
				a {
					width: 58px;
					height: 50px;
					margin: 0;
				}
			}
			li.active {
				a {
					opacity: .5;
				}
			}
		}
	}
	.flex-direction-nav {
		a {
			top: auto;
			bottom: 0;
			margin-top: 0;
			line-height: 26px;
		}
	}
	.produto-video {
		border: 0;
		width: auto;
		padding: 0;
	}
}
.thumbs-vertical&+.conteiner-imagem {
	margin-left: 90px;
}
.thumbs-vertical&+.conteiner-imagem&+.produto-thumbs&+.produto-compartilhar {
	margin-left: 90px;
}
.seta-arraste {
	animation: setaArraste .27s ease-in-out infinite alternate;
	-webkit-animation: setaArraste .27s ease-in-out infinite alternate;
	-moz-animation: setaArraste .27s ease-in-out infinite alternate;
	display: none;
	position: absolute;
	left: -230px;
	top: 60px;
	font-size: 140px;
	color: @white;
}
.sombra-arraste {
	display: none;
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	z-index: 45;
	background: @black;
	opacity: .4;
	filter: alpha(opacity=40);
}

#modalRecuperarSenha {
	label {
		margin-right: 10px;
	}
}
.modo-orcamento {
	.conteudo-topo {
		margin-top: 3.3%;
	}
	.carrinho-interno {
		.nome-produto {
			width: 206px;
		}
	}
}
.modo-catalogo-sem-preco {
	.conteudo-topo {
		margin-top: 3.3%;
	}
	.carrinho-interno {
		.nome-produto {
			width: 206px;
		}
	}
}
.modo-catalogo-com-preco {
	.conteudo-topo {
		margin-top: 3.3%;
	}
}
.pagina-documentacao {
	h1 {
		font-weight: 400;
		padding: 15px 0;
		margin: 0 0 20px;
		border-width: 0 0 1px;
		border-style: solid;
	}
	h4 {
		font-weight: 400;
		margin: 15px 0;
	}
	h2 {
		font-weight: 300;
	}
	h3 {
		font-weight: 300;
	}
	h6 {
		font-weight: 300;
	}
	>ul {
		margin: 0;
	}
	ol {
		li {
			list-style-type: decimal;
		}
	}
	.conteudo {
		.caixa-sombreada {
			box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
		}
		.fundo-principal[class^="icon-"] {
			padding: 5px 8px;
		}
		.fundo-principal[class*=" icon-"] {
			padding: 5px 8px;
		}
		.fundo-secundario[class^="icon-"] {
			padding: 5px 8px;
		}
		.fundo-secundario[class*=" icon-"] {
			padding: 5px 8px;
		}
		.row-fluid {
			margin: 10px 0;
		}
	}
	.navegacao {
		padding: 0;
		ul {
			padding: 20px;
		}
		li.active {
			a {
				background-color: @background_color_17;
			}
		}
	}
	.sessao {
		margin: 0 0 20px;
	}
	font-family: @font-padrao;
	font-size: 13px;
	code {
		margin: 3px;
		display: inline-block;
		color: @color_22;
	}
	button {
		margin-right: 10px;
	}
	.nav {
		margin: 0;
		li {
			line-height: 35px;
			border-width: 1px 0 0;
			border-style: solid;
			position: relative;
			&:first-child {
				border: 0;
			}
			a {
				font-size: 14px;
				display: block;
				padding: 0 20px 0 10px;
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
				span {
					margin: 0 5px 0 0;
				}
				i {
					position: absolute;
					top: 11px;
					right: 10px;
				}
				&:hover {
					text-decoration: none;
					background-color: @background_color_17;
				}
			}
		}
	}
	.contador {
		display: inline-block;
		vertical-align: middle;
		font-size: 14px;
		width: 30px;
		height: 30px;
		line-height: 30px;
		text-align: center;
		margin: 0 15px 0 0;
		box-shadow: 0 0 4px rgba(0, 0, 0, 0.25);
	}
	.caixa-sombreada {
		margin: 0 0 20px;
	}
	.lista-icones {
		li {
			display: inline;
			vertical-align: baseline;
			margin: 0 10px 0 0;
			* {
				vertical-align: baseline;
			}
		}
	}
	.img-polaroid {
		max-width: 95%;
	}
	.navegacao.fixo {
		position: fixed;
		top: 20px;
	}
	#barraTopo {
		visibility: hidden;
	}
	.coluna {
		position: relative;
	}
}
.prettyprint {
	font-family: @font-padrao;
	margin: 10px 0;
}
iframe[name=google_conversion_frame] {
	display: none !important;
}
div {
	>#dark.dark {
		z-index: 21;
	}
	>#dark.dark&+#boxLight {
		z-index: 21;
	}
}
.btn-koin {
	img {
		width: 70px;
		margin-left: 5px;
		margin-bottom: 1px;
	}
}
.acesso-restrito {
	.info-container {
		padding: 30px 10px;
		.titulo {
			font-size: 20px;
		}
		img {
			margin-right: 20px;
		}
	}
	.modal-footer {
		span {
			font-size: 14px;
			font-weight: 400;
			margin: 0 10px 0 0;
		}
	}
}
.icon-animate {
	-webkit-animation: spin 2s linear infinite;
	-moz-animation: spin 2s linear infinite;
	animation: spin 2s linear infinite;
}
.loading-spinner {
	width: 70px;
	text-align: center;
	>div {
		width: 18px;
		height: 18px;
		background-color: @white;
		border-radius: 100%;
		display: inline-block;
		-webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;
		animation: sk-bouncedelay 1.4s infinite ease-in-out both;
	}
	.bounce1 {
		-webkit-animation-delay: -0.32s;
		animation-delay: -0.32s;
	}
	.bounce2 {
		-webkit-animation-delay: -0.16s;
		animation-delay: -0.16s;
	}
}
.ui-helper-hidden-accessible {
	display: none;
}
.ui-autocomplete {
	background: @white;
	border: 1px solid rgba(0, 0, 0, 0.12);
	max-width: 100%;
	position: absolute;
	.ui-menu-item {
		border-top: 1px solid rgba(0, 0, 0, 0.12);
		&:first-child {
			border-top: 0;
		}
		.ui-corner-all {
			display: block;
			padding: 5px;
			cursor: pointer;
			overflow: hidden;
			line-height: 35px;
			white-space: nowrap;
			text-overflow: ellipsis;
			&:hover {
				background: #f5f5f5;
				text-decoration: none;
			}
		}
		.img {
			float: left;
			width: 35px;
			height: 35px;
			border: 1px solid #e5e5e5;
			margin: 0 10px 0 0;
			position: relative;
			img {
				display: block;
				margin: auto;
				position: absolute;
				top: 0;
				bottom: 0;
				left: 0;
				right: 0;
				width: auto;
				height: auto;
				max-width: 100%;
				max-height: 100%;
			}
		}
	}
	.ui-state-focus {
		background: #f5f5f5;
		text-decoration: none;
	}
}
.ui-autocomplete&+.ui-autocomplete {
	position: fixed;
}
.linha-digitavel {
	background-color: @white;
	text-align: center;
	margin-bottom: 10px;
}
#pedidoLinhaDigitavel {
	font-size: 15px;
}
.cor-principal {
	color: @color-4;
}
.fundo-principal {
	background-color: @color-4;
	color: @white;
	* {
		color: @white;
		&:hover {
			color: @white;
		}
	}
	&:hover {
		color: @white;
		opacity: .8;
	}
}
.flex-control-paging {
	li {
		a.flex-active {
			background-color: @color-4;
		}
		a {
			&:hover {
				background-color: @white;
			}
		}
	}
}
.cor-secundaria {
	color: @color-4;
}
.fundo-principal.botao {
	&:hover {
		color: @white;
		opacity: 1;
	}
}
.fundo-secundario.botao {
	&:hover {
		color: @white;
	}
}
.popover-content {
	color: @color-4;
}
@media (max-width:1024px) {
	.conteiner {
		padding: 0 10px;
	}
	.conteiner-principal {
		.conteiner {
			padding: 10px;
		}
	}
	.listagem {
		.span6 {
			.imagem-produto {
				height: 250px;
			}
		}
		.produtos-carrossel[data-produtos-linha="2"] {
			.imagem-produto {
				height: 250px;
			}
		}
		.span4 {
			.imagem-produto {
				height: 220px;
			}
		}
		.produtos-carrossel[data-produtos-linha="3"] {
			.imagem-produto {
				height: 220px;
			}
		}
		.span3 {
			.imagem-produto {
				height: 160px;
			}
			.botao-favoritos {
				display: none;
			}
		}
		.produtos-carrossel[data-produtos-linha="4"] {
			.imagem-produto {
				height: 160px;
			}
			.botao-favoritos {
				display: none;
			}
		}
	}
}
@media screen and (max-width:860px) {
	.listagem {
		.produtos-carrossel {
			.listagem-linha.flexslider {
				.flex-direction-nav {
					.flex-prev {
						opacity: 1;
						left: -25px;
					}
					.flex-next {
						opacity: 1;
						right: -25px;
					}
				}
			}
		}
	}
}
@media (max-width:1064px) {
	.produto {
		.acoes-produto {
			.preco-produto {
				.titulo {
					font-size: 18px;
				}
				.preco-venda {
					font-size: 13px;
				}
			}
			.preco-parcela {
				font-size: 11px;
			}
		}
	}
}
@media (max-width:765px) {
	#comprar-ajax-status {
		.sucesso {
			.buttons.btn-orcamento {
				min-width: 0;
			}
			.buttons {
				>* {
					display: block;
					float: none !important;
				}
				.continuar-comprando {
					margin: 0;
				}
			}
		}
	}
}

@media (max-width:1200px) {
	#barraTopo {
		.canais-contato {
			ul {
				li {
					&:first-child {
						display: none;
					}
				}
			}
		}
	}
}
@media (max-width:767px) {
	.thumbs-vertical&+.conteiner-imagem {
		margin-left: 0;
	}
	.thumbs-vertical&+.conteiner-imagem&+.produto-thumbs&+.produto-compartilhar {
		margin-left: 0;
	}
}
*/