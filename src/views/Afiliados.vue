<template>
  <div>
    <div v-for="(item, index) in items" :key="index">
      <div v-if="item.menuit_tipo == 1 && item.menuit_nivel == 0">
        {{ index }} . {{ item.menuit_descripcion }} . cajita . N1
      </div>
      <div v-else-if="item.menuit_tipo == 0 && item.menuit_nivel == 0">
        {{ index }}. {{ item.menuit_descripcion }} . grupo . N1
      </div>
      <div v-else-if="item.menuit_tipo == 1 && item.menuit_nivel == 1">
        {{ index }}. {{ item.menuit_descripcion }} . cajita . N2
      </div>
    </div>


    <div>
      <v-list>
        <v-list-item-group v-model="selectedItem" color="teal accent-4">
          <div v-for="(item, index) in items" :key="index">
            <div v-if="item.menuit_tipo == 1 && item.menuit_nivel == 0">
              <v-list-item> {{ item.menuit_descripcion }} </v-list-item>
            </div>
            <div v-else-if="item.menuit_tipo == 0 && item.menuit_nivel == 0">
              <v-menu offset-x :nudge-width="200">
                <template v-slot:activator="{ on, attrs }">
                  <v-list-item v-bind="attrs" v-on="on">
                    <v-list-item-title> {{ item.menuit_descripcion }} </v-list-item-title>
                  </v-list-item>
                </template>
                <div v-for="(item, index) in items" :key="index" color="teal accent-4">
                  <v-list v-if="item.menuit_tipo == 1 && item.menuit_nivel == 1 && item.menuit_codigo_parent == 'm40'">
                    <v-list-item color="teal accent-4">
                      <v-list-item-title> {{ item.menuit_descripcion }} </v-list-item-title>
                    </v-list-item>
                  </v-list>
                </div>
              </v-menu>
            </div>
          </div>
        </v-list-item-group>
      </v-list>
    </div>



    <!--

    <div>
      <v-list>
        <v-list-item-group v-model="selectedItem" color="teal accent-4">
          <div v-for="(item, index) in items" :key="index">
            <div v-if="item.menuit_tipo == 1 && item.menuit_nivel == 0">
              <v-list-item> {{ item.menuit_descripcion }} </v-list-item>
            </div>
            <div v-else-if="item.menuit_tipo == 0 && item.menuit_nivel == 0">
              <v-list-group v-model="selectedItem2" color="teal accent-4">
                <template v-slot:activator>
                  <v-list-item-content>
                    <v-list-item-title> {{ item.menuit_descripcion }} </v-list-item-title>
                  </v-list-item-content>
                </template>
                <div v-for="(item, index) in items" :key="index">
                  <v-list v-if="item.menuit_tipo == 1 && item.menuit_nivel == 1 && item.menuit_codigo_parent == 'm40'">
                    <v-list-item v-model="selectedItem3" color="teal accent-4">
                      <v-list-item-title> {{ item.menuit_descripcion }} </v-list-item-title>
                    </v-list-item>
                  </v-list>
                </div>
              </v-list-group>
            </div>
          </div>
        </v-list-item-group>
      </v-list>
    </div>

-->
  </div>
</template>
  
<script>

export default {
  name: 'Afiliados',
  data: () => ({
    change: false,
    selectedItem: -1,
    selectedItem2: -1,
    selectedItem3: -1,
    permanent: false,
    menu: false,
    drawer: false,
    items: [
      {
        menuit_id: 1,
        menuit_codigo: 'm10',
        menuit_descripcion: 'Afiliado',
        menuit_abrebiatura: 'Afiliado',
        menuit_tipo: 1,
        menuit_nivel: 0,
        menuit_codigo_parent: '0',
        menuit_link: '/afiliados',
        menuit_icono: 'afl.png',
        menuit_menu_codigo: 'mglob',
        menuit_perm_codigo: '10',
        menuit_orden: 1,
        menuit_visible: 1,
      },
      {
        menuit_id: 2,
        menuit_codigo: 'm20',
        menuit_descripcion: 'Parametros SFE',
        menuit_abrebiatura: 'Parametros SFE',
        menuit_tipo: 1,
        menuit_nivel: 0,
        menuit_codigo_parent: '0',
        menuit_link: '/parametrossfe',
        menuit_icono: 'parsfe.png',
        menuit_menu_codigo: 'mglob',
        menuit_perm_codigo: '20',
        menuit_orden: 2,
        menuit_visible: 1,
      },
      {
        menuit_id: 3,
        menuit_codigo: 'm30',
        menuit_descripcion: 'Paramentros',
        menuit_abrebiatura: 'Paramentros',
        menuit_tipo: 1,
        menuit_nivel: 0,
        menuit_codigo_parent: '0',
        menuit_link: '/paramentros',
        menuit_icono: 'par.png',
        menuit_menu_codigo: 'mglob',
        menuit_perm_codigo: '30',
        menuit_orden: 3,
        menuit_visible: 1,
      },
      {
        menuit_id: 4,
        menuit_codigo: 'm40',
        menuit_descripcion: 'Comprovantes',
        menuit_abrebiatura: 'Comprovantes',
        menuit_tipo: 0,
        menuit_nivel: 0,
        menuit_codigo_parent: '0',
        menuit_link: null,
        menuit_icono: 'com.png',
        menuit_menu_codigo: 'mglob',
        menuit_perm_codigo: null,
        menuit_orden: 4,
        menuit_visible: 1,
      },
      {
        menuit_id: 5,
        menuit_codigo: 'm50',
        menuit_descripcion: 'Factura',
        menuit_abrebiatura: 'Factura',
        menuit_tipo: 1,
        menuit_nivel: 1,
        menuit_codigo_parent: 'm40',
        menuit_link: '/factura',
        menuit_icono: 'nulo.png',
        menuit_menu_codigo: 'mglob',
        menuit_perm_codigo: '40',
        menuit_orden: 1,
        menuit_visible: 1,
      },
      {
        menuit_id: 6,
        menuit_codigo: 'm60',
        menuit_descripcion: 'Boleta',
        menuit_abrebiatura: 'Boleta',
        menuit_tipo: 1,
        menuit_nivel: 1,
        menuit_codigo_parent: 'm40',
        menuit_link: '/boleta',
        menuit_icono: 'nulo.png',
        menuit_menu_codigo: 'mglob',
        menuit_perm_codigo: '50',
        menuit_orden: 2,
        menuit_visible: 1,
      },
      {
        menuit_id: 7,
        menuit_codigo: 'm70',
        menuit_descripcion: 'N. Crédito',
        menuit_abrebiatura: 'N. Crédito',
        menuit_tipo: 1,
        menuit_nivel: 1,
        menuit_codigo_parent: 'm40',
        menuit_link: '/ncredito',
        menuit_icono: 'nulo.png',
        menuit_menu_codigo: 'mglob',
        menuit_perm_codigo: '60',
        menuit_orden: 3,
        menuit_visible: 1,
      },
      {
        menuit_id: 8,
        menuit_codigo: 'm80',
        menuit_descripcion: 'N. Débito',
        menuit_abrebiatura: 'N. Débito',
        menuit_tipo: 1,
        menuit_nivel: 1,
        menuit_link: '/ndebito',
        menuit_icono: 'nulo.png',
        menuit_codigo_parent: 'm40',
        menuit_menu_codigo: 'mglob',
        menuit_perm_codigo: '70',
        menuit_orden: 1,
        menuit_visible: 1,
      },
      {
        menuit_id: 9,
        menuit_codigo: 'm90',
        menuit_descripcion: 'G. Remisión',
        menuit_abrebiatura: 'G. Remisión',
        menuit_tipo: 1,
        menuit_nivel: 1,
        menuit_codigo_parent: 'm40',
        menuit_link: '/gremision',
        menuit_icono: 'nulo.png',
        menuit_menu_codigo: 'mglob',
        menuit_perm_codigo: '80',
        menuit_orden: 2,
        menuit_visible: 1,
      },
    ],
  }),
};
</script>