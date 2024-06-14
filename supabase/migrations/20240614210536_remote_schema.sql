create policy "Enable insert for authenticated users only"
on "storage"."buckets"
as permissive
for insert
to authenticated
with check (true);


create policy "Enable select for authenticated users only"
on "storage"."buckets"
as permissive
for select
to authenticated
using (true);


create policy "Enable insert for authenticated users only"
on "storage"."objects"
as permissive
for insert
to authenticated
with check (true);



