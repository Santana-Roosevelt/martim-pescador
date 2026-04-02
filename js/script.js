const CARDAPIO = {
  executivo: {
    nome: "Menu Executivo",
    descricao: "Entrada + prato principal + sobremesa",
    categorias: {
      entradas: {
        nome: "Entradas",
        icone: "🥗",
        pratos: [
          {
            id: "e1",
            nome: "Dupla de Harumaki",
            descricao:
              "Harumaki crocante recheado com legumes frescos e camarão temperado. Uma entrada leve e saborosa que combina o crocante da massa com o frescor dos ingredientes.",
            descricao_curta: "Legumes e camarão",
            categoria: "Entradas",
            imagem:
              "https://images.unsplash.com/photo-1617196034183-421b4040ed20?w=600&q=80",
          },
          {
            id: "e2",
            nome: "Salada de Bacalhau",
            descricao:
              "Salada refrescante com bacalhau desfiado, batata cozida, cebola roxa, ovo cozido, pimentão vermelho e azeitona preta. Fresca e equilibrada.",
            descricao_curta: "Batata, cebola roxa, ovo, pimentão e azeitona",
            categoria: "Entradas",
            imagem:
              "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=80",
          },
        ],
      },
      pratos: {
        nome: "Pratos Principais",
        icone: "🍽️",
        pratos: [
          {
            id: "p1",
            nome: "Linguine de Filetto",
            descricao:
              "Linguine al dente com filetto de peixe e cogumelos frescos ao creme rosti. Uma fusão delicada entre a culinária italiana e os sabores do mar.",
            descricao_curta: "Com cogumelo ao creme rosti",
            preco: "R$ 69,90",
            categoria: "Pratos Principais",
            imagem:
              "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=600&q=80",
          },
          {
            id: "p2",
            nome: "Filé Mignon Grelhado",
            descricao:
              "Filé mignon grelhado ao ponto perfeito, servido ao molho escuro encorpado, com purê de batata rústica, pedacinhos de bacon crocante e brócolis al dente.",
            descricao_curta: "Molho escuro, purê rústico e bacon crocante",
            preco: "R$ 74,90",
            categoria: "Pratos Principais",
            imagem:
              "https://images.unsplash.com/photo-1546833998-877b37c2e5c6?w=600&q=80",
          },
          {
            id: "p3",
            nome: "Camarão ao Molho de Queijo",
            descricao:
              "Camarões suculentos ao molho cremoso de queijo, servidos com arroz ao pomodoro e manjericão fresco, cenoura julienne e cobertos com batata palha crocante.",
            descricao_curta: "Arroz ao pomodoro e batata palha",
            preco: "R$ 78,90",
            categoria: "Pratos Principais",
            imagem:
              "https://images.unsplash.com/photo-1565680018093-ebb6b9ab5460?w=600&q=80",
          },
          {
            id: "p4",
            nome: "Salmão Grelhado",
            descricao:
              "Filé de salmão grelhado no ponto certo, servido com molho tarê caseiro e nhoque de banana da terra ao pomodoro. Uma harmonia entre o mar e a terra.",
            descricao_curta: "Com tarê e nhoque de banana da terra",
            preco: "R$ 79,90",
            categoria: "Pratos Principais",
            imagem:
              "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=600&q=80",
          },
          {
            id: "p5",
            nome: "Mariscadinha Martim",
            descricao:
              "Generoso mix de frutos do mar — camarão, lula, mexilhão e peixe — preparados na nossa moqueca especial, acompanhados de arroz branco, pirão cremoso e farofa crocante.",
            descricao_curta: "Camarão, lula, mexilhão e peixe",
            preco: "R$ 79,90",
            categoria: "Pratos Principais",
            imagem:
              "https://images.unsplash.com/photo-1559737558-2f5a35f4523b?w=600&q=80",
          },
        ],
      },
      combinado: {
        nome: "Combinado Japonês",
        icone: "🍱",
        pratos: [
          {
            id: "c1",
            nome: "Combinado Executivo 14 Peças",
            descricao:
              "2 sashimi de salmão · 2 niguiri de salmão · 1 niguiri de atum · 1 niguiri de peixe branco · 2 uramaki de salmão grelhado · 2 acelga dyo · 2 shake couve · 2 hossomaki de atum",
            descricao_curta: "Salmão, atum e peixe branco — 14 peças",
            preco: "R$ 74,90",
            categoria: "Combinado Japonês",
            imagem:
              "https://images.unsplash.com/photo-1553621042-f6e147245754?w=600&q=80",
          },
          {
            id: "c2",
            nome: "Combinado Premium 14 Peças",
            descricao:
              "2 sashimi de salmão · 3 niguiri de salmão · 2 uramaki de salmão cru · 2 hossomaki de salmão cru · 3 baterá · 2 philadelphia light. A seleção premium da casa.",
            descricao_curta: "Seleção premium de salmão — 14 peças",
            preco: "R$ 84,90",
            categoria: "Combinado Japonês",
            imagem:
              "https://images.unsplash.com/photo-1617196034099-5b28d4ddb700?w=600&q=80",
          },
        ],
      },
      sobremesas: {
        nome: "Sobremesas",
        icone: "🍮",
        pratos: [
          {
            id: "s1",
            nome: "Brigadeirão de Chocolate",
            descricao:
              "Brigadeirão cremoso de chocolate com farofa crocante por cima. Irresistível para os amantes do chocolate.",
            descricao_curta: "Com farofa crocante",
            categoria: "Sobremesas",
            imagem:
              "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600&q=80",
          },
          {
            id: "s2",
            nome: "Pudim de Leite Condensado",
            descricao:
              "Clássico pudim de leite condensado, cremoso e aveludado, com calda de caramelo dourado. Encerra a refeição com elegância.",
            descricao_curta: "Cremoso com calda de caramelo",
            categoria: "Sobremesas",
            imagem:
              "https://images.unsplash.com/photo-1574085733277-851d9d856a3a?w=600&q=80",
          },
        ],
      },
    },
  },
  rodizio: {
    nome: "Rodízio Japonês",
    descricao: "Serviço ilimitado de culinária japonesa",
    categorias: {
      entradas: {
        nome: "Entradas e Saladinhas",
        icone: "🥗",
        pratos: [
          {
            id: "re1",
            nome: "Sunomono",
            descricao:
              "Salada japonesa de pepino marinado em vinagre de arroz, adocicado e muito refrescante. Ideal para abrir o apetite.",
            descricao_curta: "Pepino ao vinagre de arroz",
            categoria: "Entradas",
            imagem: "img/Entradas_e_saladinhas/sunomono.jpeg",
          },
          {
            id: "re2",
            nome: "Ceviche de Frutos do Mar",
            descricao:
              "Frutos do mar frescos marinados em suco de limão com temperos especiais, coentro e pimenta. Leve e intenso.",
            descricao_curta: "Frutos do mar marinados",
            categoria: "Entradas",
            imagem: "img/Entradas_e_saladinhas/ceviche.jpeg",
          },
          {
            id: "re3",
            nome: "Vinagrete de Polvo",
            descricao:
              "Polvo macio e bem temperado em vinagrete com ervas frescas e azeite extravirgem.",
            descricao_curta: "Polvo ao vinagrete",
            categoria: "Entradas",
            imagem: "img/Entradas_e_saladinhas/polvo_a_vinagrete.jpeg",
          },
          {
            id: "re4",
            nome: "Pizza Japonesa",
            descricao:
              "Releitura japonesa da pizza com massa especial, recheios orientais e um toque de wasabi. Fusão surpreendente.",
            descricao_curta: "Fusão japonesa",
            categoria: "Entradas",
            imagem:
              "img/Entradas_e_saladinhas/pizza_japonesa.jpg",
          },
          {
            id: "re5",
            nome: "Acarajé Japonês",
            descricao:
              "Releitura criativa do clássico baiano com massa de feijão e recheio japonês — fusão única e exclusiva do Martim.",
            descricao_curta: "Fusão baiano-japonesa",
            categoria: "Entradas",
            imagem:
              "img/Entradas_e_saladinhas/acaraje_japones.jpg",
          },
          {
            id: "re6",
            nome: "Harumaki de Legumes",
            descricao:
              "Rolinho primavera frito com recheio de legumes frescos refogados com shoyu. Crocante e saboroso.",
            descricao_curta: "Rolinho de legumes frescos",
            categoria: "Entradas",
            imagem:
              "img/Entradas_e_saladinhas/harumaki_legumes.jpeg",
          },
          {
            id: "re7",
            nome: "Harumaki de Queijo",
            descricao:
              "Rolinho primavera recheado com queijo cremoso derretido. Irresistível com molho agridoce.",
            descricao_curta: "Queijo cremoso derretido",
            categoria: "Entradas",
            imagem:
              "img/Entradas_e_saladinhas/harumaki_queijo.jpg",
          },
          {
            id: "re8",
            nome: "Harumaki de Salmão",
            descricao:
              "Rolinho primavera recheado com salmão fresco temperado com cream cheese e cebolinha.",
            descricao_curta: "Salmão fresco e cream cheese",
            categoria: "Entradas",
            imagem:
              "img/Entradas_e_saladinhas/harumaki_salmao.jpg",
          },
          {
            id: "re9",
            nome: "Shumay de Camarão",
            descricao:
              "Bolinho cozido no vapor à base de camarão temperado, envolto em massa de wonton. Delicado e suculento.",
            descricao_curta: "Cozido no vapor",
            categoria: "Entradas",
            imagem:
              "img/Entradas_e_saladinhas/shumay_camarao.jpg",
          },
        ],
      },
      makizushi: {
        nome: "Makizushi",
        icone: "🍣",
        pratos: [
          {
            id: "rm1",
            nome: "Acelga Maki",
            descricao:
              "Hossomaki envolto em folha de acelga fresca ao invés de nori. Leve e refrescante.",
            descricao_curta: "Envolto em acelga fresca",
            categoria: "Makizushi",
            imagem:
              "img/Makizushi/Acelga_Maki.jpg",
          },
          {
            id: "rm2",
            nome: "Hot Roll",
            descricao:
              "Uramaki empanado no panko e frito, crocante por fora com recheio quente e cremoso.",
            descricao_curta: "Frito e crocante por fora",
            categoria: "Makizushi",
            imagem:
              "img/Makizushi/hot_roll.jpg",
          },
          {
            id: "rm3",
            nome: "Shake Couve",
            descricao:
              "Hossomaki de salmão envolto em folha de couve fresca. Combinação surpreendente e saudável.",
            descricao_curta: "Salmão com couve",
            categoria: "Makizushi",
            imagem:
              "img/Makizushi/snake_couve.jpg",
          },
          {
            id: "rm4",
            nome: "Salmão Skin",
            descricao:
              "Maki com pele de salmão tostada na brasa, crocante e cheia de sabor. Um dos favoritos da casa.",
            descricao_curta: "Pele crocante de salmão",
            categoria: "Makizushi",
            imagem:
              "img/Makizushi/salmao_skin.jpg",
          },
          {
            id: "rm5",
            nome: "Califórnia",
            descricao:
              "O clássico uramaki com kani, pepino e abacate, coberto com gergelim. Suave e equilibrado.",
            descricao_curta: "Kani, pepino e abacate",
            categoria: "Makizushi",
            imagem:
              "img/Makizushi/california.jpg",
          },
          {
            id: "rm6",
            nome: "Salmão Grelhado",
            descricao:
              "Uramaki recheado com salmão grelhado ao tarê e cream cheese. Quente, cremoso e aromático.",
            descricao_curta: "Salmão grelhado ao tarê",
            categoria: "Makizushi",
            imagem:
              "img/Makizushi/hot_furai_salmao.jpg",
          },
          {
            id: "rm7",
            nome: "Shakemaki",
            descricao:
              "Hossomaki clássico de salmão fresco. Simples, puro e impecável — o básico bem feito.",
            descricao_curta: "Salmão fresco clássico",
            categoria: "Makizushi",
            imagem:
              "img/Makizushi/shakemaki.jpg",
          },
          {
            id: "rm8",
            nome: "Ebimaki",
            descricao:
              "Hossomaki recheado com camarão fresco, temperado com limão e shoyu.",
            descricao_curta: "Camarão fresco",
            categoria: "Makizushi",
            imagem:
              "img/Makizushi/ebimaki.jpg",
          },
          {
            id: "rm9",
            nome: "Hot Filadélfia",
            descricao:
              "Uramaki quente com cream cheese derretido, salmão e coberto com molho especial. Cremoso e irresistível.",
            descricao_curta: "Cream cheese derretido e salmão",
            categoria: "Makizushi",
            imagem:
              "img/Makizushi/hot_filadelfia.jpg",
          },
          {
            id: "rm10",
            nome: "Uramaki de Atum",
            descricao:
              "Uramaki recheado com atum fresco levemente temperado, coberto com gergelim negro.",
            descricao_curta: "Atum fresco",
            categoria: "Makizushi",
            imagem:
              "img/Makizushi/uramaki_atum.jpg",
          },
          {
            id: "rm11",
            nome: "Ebitem Especial",
            descricao:
              "Camarão empanado no panko em formato de uramaki especial — crocante e saboroso.",
            descricao_curta: "Camarão no panko",
            categoria: "Makizushi",
            imagem:
              "img/Makizushi/ebitem_especial.jpg",
          },
          {
            id: "rm12",
            nome: "Uramaki de Polvo",
            descricao:
              "Uramaki recheado com polvo macio e temperado, toque de limão siciliano.",
            descricao_curta: "Polvo macio e temperado",
            categoria: "Makizushi",
            imagem:
              "img/Makizushi/uramaki_polvo.jpg",
          },
          {
            id: "rm13",
            nome: "Hot Furai com Salmão",
            descricao:
              "Salmão empanado no panko e frito, crocante por fora e suculento por dentro.",
            descricao_curta: "Salmão empanado frito",
            categoria: "Makizushi",
            imagem:
              "img/Makizushi/hot_furai_salmao.jpg",
          },
          {
            id: "rm14",
            nome: "Joe de Salmão",
            descricao:
              "Gunkan de salmão fresco — disponível cru ou maçaricado na hora. Intenso e aromático.",
            descricao_curta: "Cru ou maçaricado",
            categoria: "Makizushi",
            imagem:
              "img/Makizushi/joe_salmao.jpg",
          },
          {
            id: "rm15",
            nome: "Joe de Salmão com Shimeji",
            descricao:
              "Gunkan de salmão com shimeji salteado — disponível cru ou maçaricado. Combinação excepcional.",
            descricao_curta: "Salmão e shimeji salteado",
            categoria: "Makizushi",
            imagem:
              "img/Makizushi/joe_salmao_shimeji.jpg",
          },
          {
            id: "rm16",
            nome: "Joe de Camarão",
            descricao:
              "Gunkan de camarão fresco e suculento, levemente temperado.",
            descricao_curta: "Camarão fresco",
            categoria: "Makizushi",
            imagem:
              "img/Makizushi/joe_camarao.jpg",
          },
          {
            id: "rm17",
            nome: "Oshizushi de Salmão",
            descricao:
              "Sushi prensado em camadas com salmão fresco. Apresentação elegante e sabor marcante.",
            descricao_curta: "Sushi prensado em camadas",
            categoria: "Makizushi",
            imagem:
              "img/Makizushi/oshizushi_salmao.jpg",
          },
          {
            id: "rm18",
            nome: "Sakemaki Especial",
            descricao:
              "Criação exclusiva da casa com salmão e ingredientes secretos. A receita favorita dos clientes fiéis.",
            descricao_curta: "Receita exclusiva da casa",
            categoria: "Makizushi",
            imagem:
              "img/Makizushi/sakemaki_especial.jpg",
          },
        ],
      },
      sashimi: {
        nome: "Sashimi",
        icone: "🐟",
        pratos: [
          {
            id: "rs1",
            nome: "Sashimi de Salmão",
            descricao:
              "Fatias de salmão fresco cortadas na espessura ideal. Cor vibrante, textura sedosa. Servido com shoyu e wasabi. 12 unidades.",
            descricao_curta: "Salmão fresco — 12 unidades",
            categoria: "Sashimi",
            imagem:
              "https://images.unsplash.com/photo-1534482421-64566f976cfa?w=600&q=80",
          },
          {
            id: "rs2",
            nome: "Sashimi de Atum",
            descricao:
              "Fatias de atum fresco de coloração vermelho-vivo intenso. Sabor encorpado e textura firme. 12 unidades.",
            descricao_curta: "Atum fresco — 12 unidades",
            categoria: "Sashimi",
            imagem:
              "https://images.unsplash.com/photo-1534482421-64566f976cfa?w=600&q=80",
          },
          {
            id: "rs3",
            nome: "Sashimi de Peixe Branco",
            descricao:
              "Fatias de peixe branco fresco de sabor suave e delicado. Textura firme e leve. 12 unidades.",
            descricao_curta: "Peixe branco suave — 12 unidades",
            categoria: "Sashimi",
            imagem:
              "https://images.unsplash.com/photo-1534482421-64566f976cfa?w=600&q=80",
          },
          {
            id: "rs4",
            nome: "Peixe Branco Defumado",
            descricao:
              "Sashimi de peixe branco defumado artesanalmente, com aroma suave e sabor inconfundível. 12 unidades.",
            descricao_curta: "Defumado artesanal — 12 unidades",
            categoria: "Sashimi",
            imagem:
              "https://images.unsplash.com/photo-1534482421-64566f976cfa?w=600&q=80",
          },
          {
            id: "rs5",
            nome: "Carpaccio de Salmão",
            descricao:
              "Fatias finíssimas de salmão fresco em estilo carpaccio, temperadas com azeite extravirgem, limão e alcaparras.",
            descricao_curta: "Fatias finíssimas com azeite e limão",
            categoria: "Sashimi",
            imagem:
              "https://images.unsplash.com/photo-1534482421-64566f976cfa?w=600&q=80",
          },
          {
            id: "rs6",
            nome: "Carpaccio de Atum",
            descricao:
              "Fatias finíssimas de atum em estilo carpaccio com molho especial da casa, gergelim e cebolinha.",
            descricao_curta: "Com molho especial da casa",
            categoria: "Sashimi",
            imagem:
              "https://images.unsplash.com/photo-1534482421-64566f976cfa?w=600&q=80",
          },
          {
            id: "rs7",
            nome: "Carpaccio de peixe branco",
            descricao:
              "Fatias finíssimas de peixe branco em estilo carpaccio com molho especial da casa, gergelim e cebolinha.",
            descricao_curta: "Com molho especial da casa",
            categoria: "Sashimi",
            imagem:
              "https://images.unsplash.com/photo-1534482421-64566f976cfa?w=600&q=80",
          },
          {
            id: "rs8",
            nome: "Carpaccio de peixe defumado",
            descricao:
              "Fatias finíssimas de peixe defumado em estilo carpaccio com molho especial da casa, gergelim e cebolinha.",
            descricao_curta: "Com molho especial da casa",
            categoria: "Sashimi",
            imagem:
              "https://images.unsplash.com/photo-1534482421-64566f976cfa?w=600&q=80",
          },
        ],
      },
      temaki: {
        nome: "Temaki",
        icone: "🌮",
        pratos: [
          {
            id: "rt1",
            nome: "Camarão c/ Cream Cheese e Cebolinha",
            descricao:
              "Grande cone de alga crocante recheado com camarão suculento, cream cheese cremoso e cebolinha verde picada.",
            descricao_curta: "Cream cheese e cebolinha",
            categoria: "Temaki",
            imagem:
              "https://images.unsplash.com/photo-1617196034099-5b28d4ddb700?w=600&q=80",
          },
          {
            id: "rt2",
            nome: "Atum com Cebolinha",
            descricao:
              "Cone de alga com atum fresco picado, cebolinha verde e um toque de shoyu. Clássico e saboroso.",
            descricao_curta: "Atum fresco e cebolinha",
            categoria: "Temaki",
            imagem:
              "https://images.unsplash.com/photo-1617196034099-5b28d4ddb700?w=600&q=80",
          },
          {
            id: "rt3",
            nome: "Camarão com Salmão",
            descricao:
              "Cone de alga com combinação generosa de camarão e salmão fresco. Sabor dobrado.",
            descricao_curta: "Camarão e salmão fresco",
            categoria: "Temaki",
            imagem:
              "https://images.unsplash.com/photo-1617196034099-5b28d4ddb700?w=600&q=80",
          },
          {
            id: "rt4",
            nome: "Salmão com Cebolinha",
            descricao:
              "Cone de alga com salmão fresco fatiado e cebolinha verde. Delicado e equilibrado.",
            descricao_curta: "Salmão e cebolinha verde",
            categoria: "Temaki",
            imagem:
              "https://images.unsplash.com/photo-1617196034099-5b28d4ddb700?w=600&q=80",
          },
          {
            id: "rt5",
            nome: "Salmão Grelhado",
            descricao:
              "Cone de alga com salmão grelhado ao molho tarê. Quente, aromático e cheio de sabor.",
            descricao_curta: "Grelhado ao molho tarê",
            categoria: "Temaki",
            imagem:
              "https://images.unsplash.com/photo-1617196034099-5b28d4ddb700?w=600&q=80",
          },
          {
            id: "rt6",
            nome: "Salmão skin",
            descricao:
              "Cone de alga com salmão skin ao molho tarê. Quente, aromático e cheio de sabor.",
            descricao_curta: "Skin ao molho tarê",
            categoria: "Temaki",
            imagem:
              "https://images.unsplash.com/photo-1617196034099-5b28d4ddb700?w=600&q=80",
          },
          {
            id: "rt7",
            nome: "Hot Temaki Salmão Grelhado",
            descricao:
              "Temaki servido quente com salmão grelhado, cream cheese derretido e molho especial. Reconfortante.",
            descricao_curta: "Quente com cream cheese derretido",
            categoria: "Temaki",
            imagem:
              "https://images.unsplash.com/photo-1617196034099-5b28d4ddb700?w=600&q=80",
          },
        ],
      },
      nigiri: {
        nome: "Nigiri",
        icone: "🍙",
        pratos: [
          {
            id: "rn1",
            nome: "Niguiri de Salmão",
            descricao:
              "Bolinho de arroz de sushi temperado coberto com fatia de salmão fresco. O clássico absoluto — e favorito da casa.",
            descricao_curta: "Salmão fresco — o clássico favorito",
            categoria: "Nigiri",
            imagem:
              "https://images.unsplash.com/photo-1617196034099-5b28d4ddb700?w=600&q=80",
          },
          {
            id: "rn2",
            nome: "Niguiri de Atum",
            descricao:
              "Bolinho de arroz coberto com fatia de atum fresco de coloração intensa e sabor marcante.",
            descricao_curta: "Atum fresco e marcante",
            categoria: "Nigiri",
            imagem:
              "https://images.unsplash.com/photo-1617196034099-5b28d4ddb700?w=600&q=80",
          },
          {
            id: "rn3",
            nome: "Niguiri de Peixe Branco",
            descricao:
              "Bolinho de arroz coberto com peixe branco de sabor delicado e textura suave.",
            descricao_curta: "Peixe branco delicado",
            categoria: "Nigiri",
            imagem:
              "https://images.unsplash.com/photo-1617196034099-5b28d4ddb700?w=600&q=80",
          },
          {
            id: "rn4",
            nome: "Niguiri de Camarão",
            descricao:
              "Bolinho de arroz coberto com camarão fresco cozido, levemente adoçado.",
            descricao_curta: "Camarão fresco cozido",
            categoria: "Nigiri",
            imagem:
              "https://images.unsplash.com/photo-1617196034099-5b28d4ddb700?w=600&q=80",
          },
          {
            id: "rn5",
            nome: "Niguiri de Salmão Skin",
            descricao:
              "Bolinho de arroz coberto com pele de salmão tostada e crocante. Textura única e sabor intenso.",
            descricao_curta: "Pele de salmão crocante",
            categoria: "Nigiri",
            imagem:
              "https://images.unsplash.com/photo-1617196034099-5b28d4ddb700?w=600&q=80",
          },
          {
            id: "rn6",
            nome: "Niguiri de Peixe Defumado",
            descricao:
              "Bolinho de arroz coberto com peixe branco defumado artesanalmente. Aroma inconfundível.",
            descricao_curta: "Defumado artesanal",
            categoria: "Nigiri",
            imagem:
              "https://images.unsplash.com/photo-1617196034099-5b28d4ddb700?w=600&q=80",
          },
        ],
      },
      teppan: {
        nome: "Chapinhas de Teppan",
        icone: "🥩",
        pratos: [
          {
            id: "rtp1",
            nome: "Filé ao Molho de Ostra c/ Legumes",
            descricao:
              "Tiras de filé mignon salteadas no teppan com molho de ostra encorpado, acompanhadas de legumes crocantes e coloridos.",
            descricao_curta: "Molho de ostra e legumes crocantes",
            categoria: "Chapinhas de Teppan",
            imagem:
              "https://images.unsplash.com/photo-1546833998-877b37c2e5c6?w=600&q=80",
          },
          {
            id: "rtp2",
            nome: "Frango ao Molho Tarê c/ Legumes",
            descricao:
              "Filé de frango grelhado no teppan com molho tarê caramelizado e legumes crocantes. Saboroso e equilibrado.",
            descricao_curta: "Tarê caramelizado e legumes",
            categoria: "Chapinhas de Teppan",
            imagem:
              "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=600&q=80",
          },
          {
            id: "rtp3",
            nome: "Peixe ao Molho Tonkatsu c/ Legumes",
            descricao:
              "Filé de peixe branco grelhado no teppan com molho tonkatsu e legumes crocantes salteados.",
            descricao_curta: "Tonkatsu e legumes crocantes",
            categoria: "Chapinhas de Teppan",
            imagem:
              "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=600&q=80",
          },
        ],
      },
      sobremesas: {
        nome: "Sobremesas",
        icone: "🍡",
        pratos: [
          {
            id: "rsob1",
            nome: "Abacaxi Caramelizado",
            descricao:
              "Rodelas de abacaxi caramelizadas na chapa com açúcar mascavo e canela em pó. Doce, ácido e perfumado.",
            descricao_curta: "Caramelizado com canela",
            categoria: "Sobremesas",
            imagem:
              "https://images.unsplash.com/photo-1574085733277-851d9d856a3a?w=600&q=80",
          },
          {
            id: "rsob2",
            nome: "Hot Banana c/ Doce de Leite",
            descricao:
              "Banana frita na chapa até caramelizar, coberta generosamente com doce de leite cremoso. Reconfortante.",
            descricao_curta: "Frita com doce de leite",
            categoria: "Sobremesas",
            imagem:
              "https://images.unsplash.com/photo-1574085733277-851d9d856a3a?w=600&q=80",
          },
          {
            id: "rsob3",
            nome: "Harumaki de Queijo c/ Goiabada",
            descricao:
              "Rolinho primavera frito com recheio quente de queijo minas e goiabada derretida. Clássico brasileiro em versão oriental.",
            descricao_curta: "Queijo e goiabada quentes",
            categoria: "Sobremesas",
            imagem:
              "https://images.unsplash.com/photo-1574085733277-851d9d856a3a?w=600&q=80",
          },
          {
            id: "rsob4",
            nome: "Bolo de Chocolate c/ Calda Quente",
            descricao:
              "Bolo de chocolate intenso servido com calda quente de chocolate amargo derretida na hora. Irresistível.",
            descricao_curta: "Calda quente de chocolate",
            categoria: "Sobremesas",
            imagem:
              "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600&q=80",
          },
          {
            id: "rsob5",
            nome: "Pudim de Leite",
            descricao:
              "Clássico pudim de leite condensado, cremoso e aveludado com calda de caramelo dourado.",
            descricao_curta: "Cremoso com caramelo dourado",
            categoria: "Sobremesas",
            imagem:
              "https://images.unsplash.com/photo-1574085733277-851d9d856a3a?w=600&q=80",
          },
          {
            id: "rsob6",
            nome: "Mousse de Chocolate",
            descricao:
              "Mousse aerada de chocolate amargo, leve e cremosa ao mesmo tempo. Finaliza qualquer refeição com sofisticação.",
            descricao_curta: "Aerada e cremosa",
            categoria: "Sobremesas",
            imagem:
              "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600&q=80",
          },
          {
            id: "rsob7",
            nome: "Hot Goiabinha",
            descricao:
              "Bolinho frito servido quente com recheio de goiabada derretida. Simples, gostoso e nostálgico.",
            descricao_curta: "Goiabada derretida por dentro",
            categoria: "Sobremesas",
            imagem:
              "https://images.unsplash.com/photo-1574085733277-851d9d856a3a?w=600&q=80",
          },
        ],
      },
      quentes: {
        nome: "Pratos Quentes",
        icone: "🔥",
        pratos: [
          {
            id: "rq1",
            nome: "Pastel de Queijo",
            descricao:
              "Pastel frito crocante com recheio generoso de queijo derretido. Pede molho especial.",
            descricao_curta: "Queijo generoso derretido",
            categoria: "Pratos Quentes",
            imagem:
              "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=600&q=80",
          },
          {
            id: "rq2",
            nome: "Pastel de Carne c/ Azeitonas",
            descricao:
              "Pastel crocante com carne bovina temperada e azeitonas pretas. Combinação clássica e saborosa.",
            descricao_curta: "Carne temperada e azeitonas",
            categoria: "Pratos Quentes",
            imagem:
              "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=600&q=80",
          },
          {
            id: "rq3",
            nome: "Anel de Lula Grelhada",
            descricao:
              "Anéis de lula grelhados no ponto certo — macios, suculentos e com tempero perfeito.",
            descricao_curta: "Macia e suculenta",
            categoria: "Pratos Quentes",
            imagem:
              "https://images.unsplash.com/photo-1559737558-2f5a35f4523b?w=600&q=80",
          },
          {
            id: "rq4",
            nome: "Anel de Lula Empanado",
            descricao:
              "Anéis de lula empanados e fritos até dourar — crocantes por fora e macios por dentro.",
            descricao_curta: "Crocante e macio",
            categoria: "Pratos Quentes",
            imagem:
              "https://images.unsplash.com/photo-1559737558-2f5a35f4523b?w=600&q=80",
          },
          {
            id: "rq5",
            nome: "Camarão Frito ao Alho e Óleo",
            descricao:
              "Camarões fritos em azeite com alho fatiado e cheiro-verde. Perfumados e suculentos.",
            descricao_curta: "Alho fatiado e cheiro-verde",
            categoria: "Pratos Quentes",
            imagem:
              "https://images.unsplash.com/photo-1565680018093-ebb6b9ab5460?w=600&q=80",
          },
          {
            id: "rq6",
            nome: "Camarão Empanado",
            descricao:
              "Camarões empanados com farinha panko e fritos até ficarem bem dourados e crocantes.",
            descricao_curta: "Panko dourado e crocante",
            categoria: "Pratos Quentes",
            imagem:
              "https://images.unsplash.com/photo-1565680018093-ebb6b9ab5460?w=600&q=80",
          },
          {
            id: "rq7",
            nome: "Guioza de Carne",
            descricao:
              "Pastelzinho japonês recheado com carne bovina moída temperada. Pan-frito com base crocante.",
            descricao_curta: "Carne moída temperada",
            categoria: "Pratos Quentes",
            imagem:
              "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=600&q=80",
          },
          {
            id: "rq8",
            nome: "Guioza de Porco",
            descricao:
              "Pastelzinho japonês recheado com carne de porco e repolho temperados. Clássico e delicioso.",
            descricao_curta: "Porco e repolho temperados",
            categoria: "Pratos Quentes",
            imagem:
              "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=600&q=80",
          },
          {
            id: "rq9",
            nome: "Shimeji com Cebolinha",
            descricao:
              "Cogumelo shimeji salteado na manteiga com shoyu e cebolinha verde. Aromático e saboroso.",
            descricao_curta: "Manteiga, shoyu e cebolinha",
            categoria: "Pratos Quentes",
            imagem:
              "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=80",
          },
          {
            id: "rq10",
            nome: "Yakissoba de Legumes",
            descricao:
              "Macarrão yakissoba com mix de legumes frescos ao molho especial da casa. Leve e saboroso.",
            descricao_curta: "Mix de legumes frescos",
            categoria: "Pratos Quentes",
            imagem:
              "https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=600&q=80",
          },
          {
            id: "rq11",
            nome: "Yakissoba de Carne e Frango",
            descricao:
              "Macarrão yakissoba com carne bovina e frango ao molho especial. Generoso e reconfortante.",
            descricao_curta: "Carne e frango ao molho",
            categoria: "Pratos Quentes",
            imagem:
              "https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=600&q=80",
          },
        ],
      },
    },
  },
};

// ─── ESTADO ──────────────────────────────────────────
let menuAtual = null;
let categoriaAtual = null;
let pratosAtual = [];

// ─── NAVEGAÇÃO ────────────────────────────────────────
function mostrarScreen(id) {
  document
    .querySelectorAll(".screen")
    .forEach((s) => s.classList.remove("active"));
  const el = document.getElementById(id);
  if (el) {
    el.classList.add("active");
    el.querySelector(".scroll-area")?.scrollTo(0, 0);
  }
}

function abrirCardapio(tipo) {
  menuAtual = tipo;
  const menu = CARDAPIO[tipo];
  document.getElementById("cats-titulo").textContent = menu.nome;
  document.getElementById("cats-sub").textContent = menu.descricao;
  renderCategorias(menu.categorias);
  mostrarScreen("screen-categorias");
}

function voltarHome() {
  mostrarScreen("screen-home");
}

function renderCategorias(cats) {
  const grid = document.getElementById("cats-grid");
  grid.innerHTML = "";
  Object.entries(cats).forEach(([key, cat]) => {
    const tile = document.createElement("div");
    tile.className = "cat-tile";
    tile.onclick = () => abrirCategoria(key);
    tile.innerHTML = `
      <div class="cat-tile-icon">${cat.icone}</div>
      <div class="cat-tile-nome">${cat.nome}</div>
      <div class="cat-tile-count">${cat.pratos.length} item${cat.pratos.length !== 1 ? "s" : ""}</div>
    `;
    grid.appendChild(tile);
  });
}

function abrirCategoria(catKey) {
  const menu = CARDAPIO[menuAtual];
  const cat = menu.categorias[catKey];
  categoriaAtual = catKey;
  pratosAtual = cat.pratos;
  document.getElementById("pratos-cat-icon").textContent = cat.icone;
  document.getElementById("pratos-cat-nome").textContent = cat.nome;
  renderPratos(cat.pratos);
  mostrarScreen("screen-pratos");
}

function voltarCategorias() {
  mostrarScreen("screen-categorias");
}

function renderPratos(pratos) {
  const list = document.getElementById("pratos-list");
  list.innerHTML = "";
  if (!pratos.length) {
    list.innerHTML =
      '<div class="empty-msg"><div class="icon">🍽️</div><p>Nenhum prato nessa categoria</p></div>';
    return;
  }
  pratos.forEach((p) => {
    const card = document.createElement("div");
    card.className = "prato-card";
    card.onclick = () => abrirDetalhe(p);
    card.innerHTML = `
      <img class="prato-card-img" src="${p.imagem}" alt="${p.nome}" onerror="this.src='https://images.unsplash.com/photo-1617196034099-5b28d4ddb700?w=600&q=80'" loading="lazy">
      <div class="prato-card-info">
        <div class="prato-card-nome">${p.nome}</div>
        <div class="prato-card-desc">${p.descricao_curta}</div>
        ${p.preco ? `<div class="prato-card-preco">${p.preco}</div>` : ""}
      </div>
    `;
    list.appendChild(card);
  });
}

function abrirDetalhe(prato) {
  document.getElementById("det-img").src = prato.imagem;
  document.getElementById("det-img").alt = prato.nome;
  document.getElementById("det-cat").innerHTML =
    `<span style="margin-right:4px;">${CARDAPIO[menuAtual].categorias[categoriaAtual]?.icone || ""}</span> ${prato.categoria}`;
  document.getElementById("det-nome").textContent = prato.nome;
  document.getElementById("det-desc").textContent = prato.descricao;
  const precoWrap = document.getElementById("det-preco-wrap");
  if (prato.preco) {
    precoWrap.style.display = "flex";
    document.getElementById("det-preco").textContent = prato.preco;
  } else {
    precoWrap.style.display = "none";
  }
  mostrarScreen("screen-detalhe");
  const screen = document.getElementById("screen-detalhe");
  const img = document.getElementById("det-img");

  screen.scrollTop = 0;

  const novoScreen = screen.cloneNode(true);
  screen.parentNode.replaceChild(novoScreen, screen);

  document.getElementById("screen-detalhe").addEventListener(
    "scroll",
    function () {
      const scroll = this.scrollTop;
      document.getElementById("det-img").style.transform =
        `translateY(${scroll * 0.4}px)`;
    },
    { passive: true },
  );
}

function voltarPratos() {
  mostrarScreen("screen-pratos");
}
