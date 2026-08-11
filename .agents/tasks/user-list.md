---
description: Documentación y estructura de la feature `user-list` dentro de `app/features`.
name: user-list-task
description: Documentación y estructura de la feature `user-list` reestructurada bajo `app/components`.
---

# Tarea: User List

Ubicación principal (reestructurada):

- `app/components/user-list/`

Archivos presentes y esperados:

- `UserList.tsx` — entry (thin, client) que consume el ViewModel y renderiza la UI.
- `UserListInner.tsx` — presentación pura (composición mínima, sin lógica).
- `hooks/useUserListViewModel.ts` — ViewModel: estado, handlers y lógica (no JSX).
- `index.ts` — export barrel.
- `specs/SPEC.md` — especificación SDD colocada en la feature.

Skills aplicadas (ver `/.agents/skills/`):

- `component-architecture`: feature-based layout, ViewModel pattern, SDD (`specs/SPEC.md`), local mini components (`UserListInner`).
- `component-standards`: reuso de componentes compartidos (`Button`, `Image`, etc.), Storybook requirement.
- `constants-standards`: evita literales; extraer constantes si aparecen (no aplica aún para strings sencillos usados en UI).
- `unit-testing-standards`: tests deben usar POM, colocarse en `app/components/user-list/tests/` y mapear acceptance criteria desde `specs/SPEC.md`.
- `code-style-standards`: arrow-function components/hooks, descriptive names, explicit return types.

Checklist (estado actual):

- [x] `UserList.tsx` implemented (entry, client) — presentation-only entry
- [x] `UserListInner.tsx` implemented (presentation-only)
- [x] `hooks/useUserListViewModel.ts` implemented (ViewModel logic)
- [x] `index.ts` exported
- [x] `specs/SPEC.md` added under `app/components/user-list/specs/`
- [ ] Unit tests (Vitest + RTL) — target: `app/components/user-list/tests/` (POM + tests)
- [ ] Storybook story — target: `app/components/user-list/UserList.stories.tsx` (cover Default / Empty)
- [ ] Add constants if any shared literal appears (follow `constants-standards`)
- [ ] Commit changes and open PR (branch: `feature/user-list`)

Plan de implementación adicional (pasos siguientes):

1. Escribir Page Object `UserList.page.ts` en `tests/` y cubrir acceptance criteria del `SPEC.md`.
2. Escribir `UserList.test.tsx` que use el POM para agregar/Eliminar usuarios y verificar la lista.
3. Añadir `UserList.stories.tsx` con `Default` y `Empty` stories usando `STORYBOOK_LAYOUT` constants.
4. Ejecutar `npx vitest` (tras instalar dev deps si faltan) y validar cobertura mínima.
5. Commit + PR.

Notas:

- Ya reestructuré la feature siguiendo `component-architecture` (entry + inner + hook + specs). Si quieres, implemento ahora los tests o la historia de Storybook.
- No introduje nuevos constantes globales — si prefieres que `STRING.Empty` o `ARIA_ROLE.BUTTON` se usen, indícame y los extraigo a `app/constants/`.

Checklist mínimo para la tarea:

- [x] Componente `UserList` implementado
- [x] Hook `useUserListViewModel` implementado
- [x] Export `index.ts` añadido
- [ ] Tests unitarios añadidos
- [ ] Storybook story añadida
- [ ] Commit y PR (si procede)

Notas:

- Evitar cambios globales que salgan del scope (no modificar configuraciones del repo sin razón).
- Si se amplía la feature para persistencia, crear una capa de servicio y pruebas E2E separadas.
