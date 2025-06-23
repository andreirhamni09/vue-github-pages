<script setup lang='ts'>
import { List, Pencil, Plus, Trash } from "lucide-vue-next"
import { Button } from '@/components/ui/button';
</script>

<template>
    
  <div class="container mx-auto px-4 py-8 flex flex-col min-h-screen w-full">
    <div class="flex justify-between items-center mb-6">
        <h1 class="text-3xl font-bold">Note List</h1>
        <div class="ml-auto">
            <Button class="bg-black text-white">
            <Plus/> Add
            </Button>
        </div>
    </div>
</div>
</template>