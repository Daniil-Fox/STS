import { YMapDefaultMarker } from "@yandex/ymaps3-default-ui-theme";

const mapContainer = document.querySelector("#map");

if (mapContainer) {
  initMap();

  async function initMap() {
    await ymaps3.ready;

    const { YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer } = ymaps3;

    const map = new YMap(
      mapContainer,

      {
        location: {
          center: [37.830338, 55.70772],
          zoom: 16,
        },
      },
      [new YMapDefaultSchemeLayer({}), new YMapDefaultFeaturesLayer({})]
    );

    map.addChild(
      new YMapDefaultMarker({
        coordinates: [37.830338, 55.70772],
        title:
          "Рязанский проспект, д&nbsp;86&nbsp;/ 1, стр.&nbsp;3, эт.&nbsp;3, пом. IV, ком.&nbsp;10",
        color: "tulip",
        size: "normal",
        iconName: "fallback",
      })
    );
  }
}
