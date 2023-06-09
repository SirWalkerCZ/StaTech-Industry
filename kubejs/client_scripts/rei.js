REIEvents.hide('item', e => {

    let astra = (id) => `ad_astra:${id}`;
    let ae2 = (id) => `ae2:${id}`;
    let kibe = (id) => `kibe:${id}`;
    let tr = (id) => `techreborn:${id}`;
    let tf = (id) => `twilightforest:${id}`;
    let cr = (id) => `create:${id}`;
    let ca = (id) => `createaddition:${id}`;
    let mi = (id) => `modern_industrialization:${id}`;
    let md = (id) => `moderndynamics:${id}`;


    const REI_DELETED_ITEMS = [
        astra('coal_generator'),
        astra('steel_cable'),
        astra('desh_cable'),
        astra('desh_fluid_pipe'),
        astra('ostrum_fluid_pipe'),
        astra('hammer'),
        astra('compressor'),
        astra('oil_bucket'),
        astra('oil'),
        astra('water_pump'),
        astra('astrodux'),
        astra('cable_duct'),
        astra('fluid_pipe_duct'),
        ae2('vibration_chamber'),
        ae2('ender_dust'),
        ae2('sky_stone_tank'),
        cr('crushed_platinum_ore'),
        ca('rolling_mill'),
        ca('creative_energy'),
        ca('biomass'),
        ca('biomass_pellet'),
        ca('spool'),
        ca('copper_spool'),
        ca('gold_spool'),
        ca('copper_wire'),
        ca('copper_rod'),
        ca('iron_wire'),
        ca('iron_rod'),
        ca('gold_wire'),
        ca('gold_rod'),
        ca('brass_rod'),
        ca('bioethanol'),
        ca('bioethanol_bucket'),
        ca('seed_oil'),
        ca('seed_oil_bucket'),
        ca('accumulator'),
        ca('tesla_coil'),
        ca('connector'),
        ca('capacitor'),
        ca('diamond_grit'),
        ca('redstone_relay'),
        'decorative_blocks:blockstate_copy_item',
        kibe('tank'),
        kibe('xp_shower'),
        kibe('xp_drain'),
        kibe('angel_ring'),
        'kubejs:statech_logo',
        md('wrench'),
        mi('guidebook'),
        'spirit:soul_pedestal',
        tf('uncrafting_table'),
        tr('nichrome_heating_coil'),
        tr('lithium'),
        tr('heliumplasma'),
        tr('helium3'),
        tr('helium'),
        tr('titanium_small_dust'),
        tr('alloy_smelter'),
        tr('iron_alloy_furnace'),
        tr('saw_dust'),
        tr('cloaking_device'),
        tr('fusion_coil'),
        tr('basic_tank_unit'),
        tr('advanced_tank_unit'),
        tr('industrial_tank_unit'),
        tr('quantum_tank_unit'),
        tr('creative_tank_unit'),
        tr('assembly_machine'),
        tr('chemical_reactor'),
        tr('distillation_tower'),
        tr('fluid_replicator'),
        tr('grinder'),
        tr('electric_furnace'),
        tr('yellow_garnet_dust'),
        tr('yellow_garnet_gem'),
        tr('implosion_compressor'),
        tr('industrial_blast_furnace'),
        tr('industrial_centrifuge'),
        tr('industrial_electrolyzer'),
        tr('industrial_grinder'),
        tr('industrial_sawmill'),
        tr('iron_furnace'),
        tr('vacuum_freezer'),
        tr('solid_canning_machine'),
        tr('wiremill'),
        tr('block_breaker'),
        tr('block_placer'),
        tr('elevator'),
        tr('diesel_generator'),
        tr('fusion_control_computer'),
        tr('gas_turbine'),
        tr('plasma_generator'),
        tr('semi_fluid_generator'),
        tr('drain'),
        tr('lapotronic_su'),
        tr('lsu_storage'),
        tr('medium_voltage_su'),
        tr('high_voltage_su'),
        tr('lv_transformer'),
        tr('mv_transformer'),
        tr('hv_transformer'),
        tr('ev_transformer'),
        tr('chunk_loader'),
        tr('coal_plate'),
        tr('quartz_plate'),
        tr('rock_cutter'),
        tr('basic_jackhammer'),
        tr('advanced_jackhammer'),
        tr('basic_drill'),
        tr('advanced_drill'),
        tr('basic_chainsaw'),
        tr('advanced_chainsaw'),
        tr('transformer_upgrade'),
        tr('omni_tool'),
        tr('electronic_circuit'),
        tr('solid_fuel_generator'), 
        tr('manual'),
        tr('grinder'),
        tr('compressor'),
        tr('copper_cable'),
        tr('tin_cable'),
        tr('gold_cable'),
        tr('hv_cable'),
        tr('glassfiber_cable'),
        tr('insulated_copper_cable'),
        tr('insulated_gold_cable'),
        tr('insulated_hv_cable'),
        tr('superconductor_cable'),
        tr('steel_small_dust'),
        tr('wire_mill'),
        tr('rock_cutter')
    ];
    REI_DELETED_ITEMS.forEach(id => e.hide(id));
});

REIEvents.removeCategories(e => {
    let tr = (id) => `techreborn:${id}`;
    let tf = (id) => `twilightforest:${id}`;
    const REMOVED_CAT = [
        'minecraft:plugins/tag',
        'ad_astra:compressor',
        tf('uncrafting'),
        tr('alloy_smelter'),
        tr('assembling_machine'),
        tr('chemical_reactor'),
        tr('distillation_tower'),
        tr('implosion_compressor'),
        tr('blast_furnace'),
        tr('centrifuge'),
        tr('industrial_electrolyzer'),
        tr('grinder'),
        tr('compressor'),
        tr('chemical_reactor'),
        tr('fusion_reactor'),
        tr('fluid_replicator'),
        tr('distillation_tower'),
        tr('industrial_grinder'),
        tr('industrial_sawmill'),
        tr('vacuum_freezer'),
        tr('solid_canning_machine'),
        tr('wire_mill'),
        tr('gas_turbine'),
        tr('plasma_generator'),
        tr('diesel_generator'),
        tr('semi_fluid_generator')
    ];
    REMOVED_CAT.forEach(id => e.yeet(id));
});