import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_blocks_text_image_block_image_size" AS ENUM('square', 'full');
  CREATE TYPE "public"."enum__pages_v_blocks_text_image_block_image_size" AS ENUM('square', 'full');
  ALTER TABLE "pages_blocks_text_image_block" ADD COLUMN "image_size" "enum_pages_blocks_text_image_block_image_size" DEFAULT 'square';
  ALTER TABLE "_pages_v_blocks_text_image_block" ADD COLUMN "image_size" "enum__pages_v_blocks_text_image_block_image_size" DEFAULT 'square';`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`  
  ALTER TABLE "pages_blocks_text_image_block" DROP COLUMN "image_size";
  ALTER TABLE "_pages_v_blocks_text_image_block" DROP COLUMN "image_size";
  DROP TYPE "public"."enum_pages_blocks_text_image_block_image_size";
  DROP TYPE "public"."enum__pages_v_blocks_text_image_block_image_size";`)
}
