-- SonnyDex: à exécuter une fois dans l'éditeur SQL Supabase.
create extension if not exists pgcrypto;

create table if not exists public.catalog (
  id text primary key,
  series_id text not null,
  series_name text not null,
  name text not null,
  emoji text not null default '✨',
  is_secret boolean not null default false,
  sort_order smallint not null,
  created_at timestamptz not null default now(),
  unique (series_id, sort_order)
);

create table if not exists public.user_collection (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null default auth.uid() references auth.users(id) on delete cascade,
  catalog_id text not null references public.catalog(id) on delete restrict,
  acquired_at date not null default current_date,
  note text not null default '',
  photo_path text not null,
  created_at timestamptz not null default now(),
  unique (user_id, catalog_id),
  constraint user_collection_note_length check (char_length(note) <= 240)
);

create index if not exists user_collection_user_id_idx on public.user_collection(user_id);
alter table public.catalog enable row level security;
alter table public.user_collection enable row level security;

drop policy if exists "Catalog is readable by everyone" on public.catalog;
create policy "Catalog is readable by everyone"
  on public.catalog for select using (true);

drop policy if exists "Users can read their collection" on public.user_collection;
create policy "Users can read their collection"
  on public.user_collection for select to authenticated using ((select auth.uid()) = user_id);
drop policy if exists "Users can add to their collection" on public.user_collection;
create policy "Users can add to their collection"
  on public.user_collection for insert to authenticated
  with check ((select auth.uid()) = user_id);
drop policy if exists "Users can update their collection" on public.user_collection;
create policy "Users can update their collection"
  on public.user_collection for update to authenticated
  using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);
drop policy if exists "Users can remove from their collection" on public.user_collection;
create policy "Users can remove from their collection"
  on public.user_collection for delete to authenticated using ((select auth.uid()) = user_id);

insert into public.catalog (id, series_id, series_name, name, emoji, is_secret, sort_order) values
  ('snack-01', 'snack', 'Snack Series', 'Figure 01', '🍿', false, 1),
  ('snack-02', 'snack', 'Snack Series', 'Figure 02', '🍟', false, 2),
  ('snack-03', 'snack', 'Snack Series', 'Figure 03', '🍪', false, 3),
  ('snack-04', 'snack', 'Snack Series', 'Figure 04', '🥨', false, 4),
  ('snack-05', 'snack', 'Snack Series', 'Figure 05', '🍩', false, 5),
  ('snack-secret', 'snack', 'Snack Series', 'Secret', '🍦', true, 6),
  ('fruit-apple', 'fruit', 'Fruit Series', 'Apple', '🍎', false, 1),
  ('fruit-banana', 'fruit', 'Fruit Series', 'Banana', '🍌', false, 2),
  ('fruit-cherry', 'fruit', 'Fruit Series', 'Cherry', '🍒', false, 3),
  ('fruit-grape', 'fruit', 'Fruit Series', 'Grape', '🍇', false, 4),
  ('fruit-strawberry', 'fruit', 'Fruit Series', 'Strawberry', '🍓', false, 5),
  ('fruit-secret', 'fruit', 'Fruit Series', 'Secret', '🍑', true, 6),
  ('animal-bear', 'animal', 'Animal Series 1', 'Bear', '🐻', false, 1),
  ('animal-dog', 'animal', 'Animal Series 1', 'Dog', '🐶', false, 2),
  ('animal-cat', 'animal', 'Animal Series 1', 'Cat', '🐱', false, 3),
  ('animal-rabbit', 'animal', 'Animal Series 1', 'Rabbit', '🐰', false, 4),
  ('animal-elephant', 'animal', 'Animal Series 1', 'Elephant', '🐘', false, 5),
  ('animal-secret', 'animal', 'Animal Series 1', 'Secret', '🦄', true, 6),
  ('sweet-01', 'sweet', 'Sweet Series', 'Figure 01', '🍰', false, 1),
  ('sweet-02', 'sweet', 'Sweet Series', 'Figure 02', '🍮', false, 2),
  ('sweet-03', 'sweet', 'Sweet Series', 'Figure 03', '🍫', false, 3),
  ('sweet-04', 'sweet', 'Sweet Series', 'Figure 04', '🍬', false, 4),
  ('sweet-05', 'sweet', 'Sweet Series', 'Figure 05', '🧁', false, 5),
  ('sweet-secret', 'sweet', 'Sweet Series', 'Secret', '🍭', true, 6),
  ('animal-3-01', 'animal-3', 'Animal Series 3', 'Figure 01', '🦁', false, 1),
  ('animal-3-02', 'animal-3', 'Animal Series 3', 'Figure 02', '🦒', false, 2),
  ('animal-3-03', 'animal-3', 'Animal Series 3', 'Figure 03', '🦛', false, 3),
  ('animal-3-04', 'animal-3', 'Animal Series 3', 'Figure 04', '🦌', false, 4),
  ('animal-3-05', 'animal-3', 'Animal Series 3', 'Figure 05', '🦓', false, 5),
  ('animal-3-secret', 'animal-3', 'Animal Series 3', 'Secret', '🐨', true, 6),
  ('animal-2-01', 'animal-2', 'Animal Series 2', 'Figure 01', '🐼', false, 1),
  ('animal-2-02', 'animal-2', 'Animal Series 2', 'Figure 02', '🐑', false, 2),
  ('animal-2-03', 'animal-2', 'Animal Series 2', 'Figure 03', '🐵', false, 3),
  ('animal-2-04', 'animal-2', 'Animal Series 2', 'Figure 04', '🐯', false, 4),
  ('animal-2-05', 'animal-2', 'Animal Series 2', 'Figure 05', '🦆', false, 5),
  ('animal-2-secret', 'animal-2', 'Animal Series 2', 'Secret', '🦊', true, 6),
  ('marine-dolphin', 'marine', 'Marine Series', 'Dolphin', '🐬', false, 1),
  ('marine-seahorse', 'marine', 'Marine Series', 'Seahorse', '🐴', false, 2),
  ('marine-whale', 'marine', 'Marine Series', 'Whale', '🐳', false, 3),
  ('marine-clownfish', 'marine', 'Marine Series', 'Clownfish', '🐠', false, 4),
  ('marine-shell', 'marine', 'Marine Series', 'Shell', '🐚', false, 5),
  ('marine-secret', 'marine', 'Marine Series', 'Secret', '🪼', true, 6),
  ('animal-4-01', 'animal-4', 'Animal Series 4', 'Figure 01', '🐧', false, 1),
  ('animal-4-02', 'animal-4', 'Animal Series 4', 'Figure 02', '🦘', false, 2),
  ('animal-4-03', 'animal-4', 'Animal Series 4', 'Figure 03', '🦭', false, 3),
  ('animal-4-04', 'animal-4', 'Animal Series 4', 'Figure 04', '🦩', false, 4),
  ('animal-4-05', 'animal-4', 'Animal Series 4', 'Figure 05', '🐿️', false, 5),
  ('animal-4-secret', 'animal-4', 'Animal Series 4', 'Secret', '🦚', true, 6),
  ('flower-01', 'flower', 'Flower Series', 'Figure 01', '🌹', false, 1),
  ('flower-02', 'flower', 'Flower Series', 'Figure 02', '🌷', false, 2),
  ('flower-03', 'flower', 'Flower Series', 'Figure 03', '🌻', false, 3),
  ('flower-04', 'flower', 'Flower Series', 'Figure 04', '🌼', false, 4),
  ('flower-05', 'flower', 'Flower Series', 'Figure 05', '🌸', false, 5),
  ('flower-secret', 'flower', 'Flower Series', 'Secret', '💐', true, 6),
  ('vegetable-01', 'vegetable', 'Vegetable Series', 'Figure 01', '🥕', false, 1),
  ('vegetable-02', 'vegetable', 'Vegetable Series', 'Figure 02', '🍅', false, 2),
  ('vegetable-03', 'vegetable', 'Vegetable Series', 'Figure 03', '🌽', false, 3),
  ('vegetable-04', 'vegetable', 'Vegetable Series', 'Figure 04', '🥦', false, 4),
  ('vegetable-05', 'vegetable', 'Vegetable Series', 'Figure 05', '🥬', false, 5),
  ('vegetable-secret', 'vegetable', 'Vegetable Series', 'Secret', '🥔', true, 6)
on conflict (id) do update set
  series_id = excluded.series_id,
  series_name = excluded.series_name,
  name = excluded.name,
  emoji = excluded.emoji,
  is_secret = excluded.is_secret,
  sort_order = excluded.sort_order;

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('sonny-photos', 'sonny-photos', false, 5242880, array['image/webp', 'image/jpeg', 'image/png'])
on conflict (id) do update set
  public = false,
  file_size_limit = 5242880,
  allowed_mime_types = array['image/webp', 'image/jpeg', 'image/png'];

drop policy if exists "Users can read their own Sonny photos" on storage.objects;
create policy "Users can read their own Sonny photos"
  on storage.objects for select to authenticated
  using (bucket_id = 'sonny-photos' and (storage.foldername(name))[1] = (select auth.uid())::text);
drop policy if exists "Users can upload their own Sonny photos" on storage.objects;
create policy "Users can upload their own Sonny photos"
  on storage.objects for insert to authenticated
  with check (bucket_id = 'sonny-photos' and (storage.foldername(name))[1] = (select auth.uid())::text);
drop policy if exists "Users can update their own Sonny photos" on storage.objects;
create policy "Users can update their own Sonny photos"
  on storage.objects for update to authenticated
  using (bucket_id = 'sonny-photos' and (storage.foldername(name))[1] = (select auth.uid())::text)
  with check (bucket_id = 'sonny-photos' and (storage.foldername(name))[1] = (select auth.uid())::text);
drop policy if exists "Users can delete their own Sonny photos" on storage.objects;
create policy "Users can delete their own Sonny photos"
  on storage.objects for delete to authenticated
  using (bucket_id = 'sonny-photos' and (storage.foldername(name))[1] = (select auth.uid())::text);