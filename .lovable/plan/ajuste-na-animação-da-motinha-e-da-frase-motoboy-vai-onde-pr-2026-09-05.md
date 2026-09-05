# Ajuste na animação da motinha e da frase "Motoboy vai onde precisar"

## Problema
A animação da motinha seguida da frase perdeu a sincronia. A moto deixou de surgir do canto direito e passou a aparecer no meio da tela, enquanto a frase não acompanha mais como se estivesse sendo "puxada" por ela.

Causa: moto e texto são animados separadamente com `translateX(100%)`. Como a porcentagem é relativa à largura de cada elemento, os pontos de partida são diferentes e variam conforme a tela.

## Solução
Reagrupar a moto e o texto dentro de um único container animado, de modo que ambos se desloquem juntos da direita para a esquerda, mantendo a moto à frente e a frase logo atrás.

## Passos
1. Refatorar `src/components/MotoboyAnimationSection.tsx`:
   - Criar um container flex (moto + frase) posicionado à direita fora da tela.
   - Animar apenas esse container, garantindo sincronia perfeita.
   - Manter a moto espelhada (`scale-x-[-1]`) e o estilo visual atual.
   - Preservar o comportamento de fade-in controlado pelo IntersectionObserver.

2. Atualizar `src/index.css`:
   - Substituir os keyframes `moto-loop` e `text-loop` por um único keyframe `moto-group-loop`.
   - Fazer o grupo entrar de `translateX(100vw)` (fora da tela à direita) até `translateX(-100%)` (sair pela esquerda).

3. Verificar no preview:
   - Moto e frase devem aparecer juntos vindo da direita.
   - Moto deve ficar na frente, frase logo atrás.
   - Animação deve funcionar corretamente em desktop e mobile sem criar scroll lateral.
