# Jekyll module that creates a test page
#
# Tests are in a data file and they contents Liquid tags
# In order to get those tags processed at build time
# we need to do a first pass before the real Jekyll rendering
#
# - Our Generator plugin process 'test-template.html'
# - then copies the process result in 'tests.html'
# - and that's it ! Jekyll will then process our result with Liquid tag in it
module Jekyll

  class TestJekyll < Generator

    TEMPLATE = 'test-template.html'
    TEST     = 'tests.html'

    def generate(site)

      # find template page
      tpl = site.pages.find{ |a| a.name == TEMPLATE }

      # process it
      payload = site.site_payload
      tpl.render(site.layouts, payload)

      # get rendering result
      result = tpl.output;

      # find test page
      test = site.pages.find{ |a| a.name == TEST }

      # copy template result to test page
      test.content = result

      Jekyll.logger.info "TestJekyll plugin says : Test page OK !"

    end

  end

end
