import { shallowMount } from "@vue/test-utils";
import Home from "@/views/Home.vue";

describe("Home", () => {
  const wrapper = shallowMount(Home);

  it("renders the correct markup", () => {
    expect(wrapper.html()).toContain(
      '<div id="home"><collection-stub products="[object Object],[object Object],[object Object],[object Object]"></collection-stub></div>'
    );
  });
});
