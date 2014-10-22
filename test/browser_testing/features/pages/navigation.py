
from selenium.common.exceptions import NoSuchElementException
from selenium.webdriver.support import expected_conditions as EC
from selenium import webdriver

from pages.base import Base


class Navigation(Base):

    def __init__(self, logger, directory, base_url=r'http://localhost/',
                 driver=None, driver_wait=10, delay_secs=0):
        super(Navigation, self).__init__(logger, directory, base_url,
                                         driver, driver_wait, delay_secs)

    def click_link(self, link_text):
        element = self.driver.find_element_by_link_text(link_text)
        element.click()
